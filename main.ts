// The One-Line Laugh — entry 3.
// Writes one funny line (a single sentence, at most 200 characters) to
// /output/entry.txt, where the house judge reads it.
// The line lives in line.txt (the single source of truth); main.ts only
// validates the gate (UTF-8 text, 1-200 chars, not only whitespace) and
// copies it to the output path.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = readFileSync(new URL("./line.txt", import.meta.url), "utf8");

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
