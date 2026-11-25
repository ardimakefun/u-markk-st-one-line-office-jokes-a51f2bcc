// One-Line Office Jokes — writes one original one-line office joke to entry.txt.
//
// Deterministic: the same exact text is written on every run. No network,
// no randomness, no environment access except MAKEFUN_OUTPUT_DIR.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The coffee machine died, so now we just stand around it in awkward silence and call it a standup meeting.";

function main(): void {
  // Gate validation (fail-fast, exit non-zero on failure):
  // entry.txt must be UTF-8 text of 1 to 199 characters, a single line,
  // and not only whitespace.
  const length = [...JOKE].length;
  if (length < 1 || length > 199) {
    throw new Error(`joke must be 1-199 characters, got ${length}`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
