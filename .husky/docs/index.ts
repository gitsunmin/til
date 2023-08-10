import { pipe } from "@mobily/ts-belt";
import { readDirectory, readFile, writeFile } from "./file";
import { makeCategories, makeTOC } from "./toc";
import DocsConfig from "./docs.config";

import path from "path";
import ignore from "ignore";

const tree = readDirectory(DocsConfig.makeOption.root);

const directory = ignore()
  .add(
    readFile(
      path.join(DocsConfig.makeOption.root, DocsConfig.makeOption.ignorePath)
    )
  )
  .filter(tree);

export default () =>
  pipe(
    directory,
    makeCategories,
    makeTOC,
    writeFile(DocsConfig.makeOption.target)
  );
