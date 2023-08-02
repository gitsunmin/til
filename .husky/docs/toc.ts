import * as path from "path";

import { pipe, flow, F, A } from "@mobily/ts-belt";
import { match } from "ts-pattern";
import { EXCLUDED_FILES, ROOT, SUB_MODULES_DIRECTORIS } from "./constant";
import { readDirectory } from "./file";

export const makeCategories = (directory: string[]) =>
  pipe(
    directory,
    A.filter((dir) => !EXCLUDED_FILES.has(dir)),
    A.map(flow((dir) => [dir, readDirectory(path.join(ROOT, dir))]))
  );

export const makeContent = (category: (string | string[])[]) =>
  match(category)
    .when(
      ([title]) => SUB_MODULES_DIRECTORIS.has(title as string),
      ([title]) => `\n## ${title}\n- [here](/${title})`
    )
    .otherwise(
      F.always(
        `\n## ${A.head(category)}\n${pipe(
          category,
          A.flat,
          A.filter((name) => name !== A.head(category)),
          A.map((title) => `- [${title}](/${A.head(category)}/${title})\n`),
          A.join("")
        )}`
      )
    );

export const makeTitle = (title: string) => `# ${title}`;