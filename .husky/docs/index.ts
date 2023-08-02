import { pipe } from "@mobily/ts-belt";
import { ROOT, TARGET_FILE } from "./constant";
import { readDirectory, writeFile } from "./file";
import { makeCategories, makeTOC } from "./toc";

export const main = () => {
  const directory = readDirectory(ROOT);
  pipe(
    directory,
    makeCategories,
    makeTOC,
    writeFile(TARGET_FILE)
  );
};
