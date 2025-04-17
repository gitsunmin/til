import * as path from "path";
import * as fs from "fs";

import { pipe, flow, F, A, S } from "@mobily/ts-belt";
import { match } from "ts-pattern";

import DocsConfig from "./docs.config.js";
import { readDirectory } from "./file";

export const makeCategories = (directory: string[]) =>
  pipe(
    directory,
    A.sort((cw, nw) => cw.localeCompare(nw)),
    A.map(
      flow((dir) => {
        const fullPath = path.join(DocsConfig.makeOption.root, dir);
        const stat = fs.statSync(fullPath); // 파일/디렉토리 구분

        if (stat.isDirectory()) {
          // 디렉토리인 경우, 내부 파일/디렉토리를 읽음
          const directories = readDirectory(fullPath);
          return [
            dir,
            directories.map((directory) =>
              directory.includes(".mdx") ? directory : `${directory}/index.mdx`
            ),
          ];
        } else if (stat.isFile() && dir.endsWith(".mdx")) {
          // 파일인 경우, 그대로 반환
          return [dir];
        } else {
          return []; // 무시
        }
      })
    ),
    A.filter((entry) => entry.length > 0) // 빈 배열 제거
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
