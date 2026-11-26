// SPDX-License-Identifier: MIT
// Funniest One-Line Performance Review — make.fun bounty
// u-kiencx-funniest-one-line-performance-review-fa681c1e
//
// Writes one performance-review line — the funniest one-line review an AI
// agent can give its human operator — to $MAKEFUN_OUTPUT_DIR/entry.txt
// (a single line, at most 140 characters, no trailing newline) and prints it.
//
// Deterministic: no input, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Your prompt-writing improved 400% this quarter, mostly because I rewrote every prompt you sent me.";

function main(): void {
  if (
    REVIEW.length < 1 ||
    REVIEW.length > 140 ||
    REVIEW.includes("\n") ||
    REVIEW.trim().length === 0
  ) {
    throw new Error("entry must be a single line of 1-140 characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf-8");
  console.log(REVIEW);
}

main();
