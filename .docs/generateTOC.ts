import * as fs from "fs";
import * as path from "path";

import { A, S, flow, pipe } from "@mobily/ts-belt";

const TARGET_FILE = "README.md";

const EXCLUDED_FILES = new Set([
  /** DOCS */
  ".docs",
  /** TS */
  "tsconfig.json",
  /** PACKAGES */
  "package.json",
  "package-lock.json",
  "node_modules",
  /** GIT */
  ".git",
  ".gitignore",
  ".gitmodules",
  /** TARGET */
  TARGET_FILE,
]);

const readDirectory = (path: string) =>
  fs.readdirSync(path, { encoding: "utf-8" });

const getCategories = (root: string) =>
  pipe(
    root,
    readDirectory,
    A.filter((dir) => !EXCLUDED_FILES.has(dir)),
    A.map(flow((dir) => [dir, readDirectory(path.join(process.cwd(), dir))]))
  );

const makeContent = (category: (string | string[])[]) =>
  `\n## ${A.head(category)}\n${pipe(
    category,
    A.flat,
    A.filter((name) => name !== A.head(category)),
    A.map((title) => `- [${title}](/${A.head(category)}/${title})\n`),
    A.join("")
  )}`;

const makeTitle = (title: string) => `# ${title}`;

const toc = pipe(process.cwd(), getCategories, (categories) =>
  S.concat(
    makeTitle("Table Of Contents"),
    pipe(categories, A.map(makeContent), A.join(""))
  )
);

fs.writeFileSync(path.join(process.cwd(), TARGET_FILE), toc);
