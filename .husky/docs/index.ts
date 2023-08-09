import { pipe } from "@mobily/ts-belt";
import { ROOT, TARGET_FILE, DOCS_IGNORE_PATH } from "./constant";
import { readDirectory, readFile, writeFile } from "./file";
import { makeCategories, makeTOC } from "./toc";
import path from "path";
import ignore from "ignore";

const tree = readDirectory(ROOT);

const directory = ignore()
  .add(readFile(path.join(ROOT, DOCS_IGNORE_PATH)))
  .filter(tree);

export default () =>
  pipe(directory, makeCategories, makeTOC, writeFile(TARGET_FILE));
