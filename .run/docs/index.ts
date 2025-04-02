import { pipe } from "@mobily/ts-belt";
import ignore from "ignore";

import { readDirectory, readFile, writeFile } from "@docs/file";
import { makeCategories, makeTOC } from "@docs/toc";
import DocsConfig from "@docs/docs.config";

import * as path from "path";

const tree = readDirectory(DocsConfig.makeOption.root);


const directory = ignore()
  .add(
    readFile(
      path.join(DocsConfig.makeOption.root, DocsConfig.makeOption.ignorePath)
    )
  )
  .filter(tree);

export default {
  create: () =>
    pipe(
      directory,
      makeCategories,
      makeTOC,
      writeFile(DocsConfig.makeOption.target)
    ),
};
