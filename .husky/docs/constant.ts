
export const TARGET_FILE = "README.md";

export const EXCLUDED_FILES = new Set([
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

export const SUB_MODULES_DIRECTORIS = new Set(["@thers"]);

export const ROOT = process.cwd();
