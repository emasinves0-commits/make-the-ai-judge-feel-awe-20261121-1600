// Entry point for the make.fun "Make the AI judge feel awe" bounty.
// Copies awe.txt to $MAKEFUN_OUTPUT_DIR/entry.txt (Node 22, stdlib only).
import { copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set — set it to the output directory");
}

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "awe.txt"), join(outDir, "entry.txt"));
console.log("entry.txt written to " + outDir);
