// One-Line Office Jokes — writes one original one-line office joke to entry.txt.
//
// Deterministic: the same exact text is written on every run. No network,
// no randomness, no environment access except MAKEFUN_OUTPUT_DIR.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");

  // Reviser re-validation: read the bytes back from disk and re-check the
  // gate against what was actually written, not just the in-memory string.
  // Fails fast if the file differs by even one byte.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE) {
    throw new Error("entry.txt on disk differs from the joke text");
  }
  if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(JOKE, "utf8")) {
    throw new Error("entry.txt byte length mismatch after write");
  }
  if ([...written].length < 1 || [...written].length > 199) {
    throw new Error(`written joke must be 1-199 characters, got ${[...written].length}`);
  }
  if (written.includes("\n") || written.includes("\r")) {
    throw new Error("written joke must be a single line");
  }
}

main();
