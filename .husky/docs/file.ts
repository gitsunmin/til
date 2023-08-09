import * as fs from "fs";
import * as path from "path";

import { ROOT } from "./constant";

export const readDirectory = (path: string) =>
  fs.readdirSync(path, { encoding: "utf-8" });

export const readFile = (target: string) => fs.readFileSync(target, "utf-8");

export const writeFile = (target: string) => (contents: string) =>
  fs.writeFileSync(path.join(ROOT, target), contents);
