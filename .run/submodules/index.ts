import chalk from "chalk";

console.log(chalk.green("Updating submodules..."));
Bun.spawnSync(["git", "submodule", "update", "--remote"]);
Bun.spawnSync(["git", "submodule", "update", "--init", "--recursive"]);
console.log(chalk.blue("Updated submodules"));
