import * as path from "path";

import { pipe, flow, F, A, S } from "@mobily/ts-belt";
import { match } from "ts-pattern";

import DocsConfig from "./docs.config.js";
import { readDirectory } from "./file";

export const makeCategories = (directory: string[]) =>
  pipe(
    directory,
    A.sort((cw, nw) => cw.localeCompare(nw)),
    A.map(
      flow((dir) => [
        dir,
        readDirectory(path.join(DocsConfig.makeOption.root, dir)),
      ])
    )
  );

const makeContent = (category: (string | string[])[]) =>
  match(category)
    .when(
      ([title]) => DocsConfig.makeOption.subModules.includes(title as string),
      ([title]) => `\n## ${title}\n- [here](/${title})`
    )
    .otherwise(
      F.always(
        `\n## ${A.head(category)}\n${pipe(
          category,
          A.flat,
          A.filter((name) => name !== A.head(category)),
          A.sort((cw, nw) => cw.localeCompare(nw)),
          A.map((title) => `- [${title}](/${A.head(category)}/${title})\n`),
          A.join("")
        )}`
      )
    );

const makeTitle = (title: string) => `# ${title}`;

export const makeTOC = (categories: readonly (string | string[])[][]) =>
  S.concat(
    makeTitle("Table Of Contents"),
    pipe(categories, A.map(makeContent), A.join(""))
  );
