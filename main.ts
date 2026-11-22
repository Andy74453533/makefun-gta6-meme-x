// gta6-meme-x-01 entry (Node 22, standard library only).
// The post itself is the entry: this program only copies POST.json
// (the X post's address) from the repository to the output directory,
// where the gate reads it. The house reads the post from X — its first
// picture and its text — and hands that to the judge. Nothing this
// program writes about the post is judged.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// In the grader the repository lives at /bot; outside it, MAKEFUN_BOT_DIR
// stands in for that path ("." when run from the repo root). Resolve
// POST.json from there instead of assuming the working directory.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
