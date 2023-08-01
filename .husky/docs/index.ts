import { pipe, A, S } from "@mobily/ts-belt";
import { ROOT, TARGET_FILE } from "./constant";
import { readDirectory, writeFile } from "./file";
import { makeCategories, makeContent, makeTitle } from "./toc";

export const main = () => {
  const directory = readDirectory(ROOT);
  pipe(
    directory,
    makeCategories,
    (categories) =>
      S.concat(
        makeTitle("Table Of Contents"),
        pipe(categories, A.map(makeContent), A.join(""))
      ),
    writeFile(TARGET_FILE)
  );
};
