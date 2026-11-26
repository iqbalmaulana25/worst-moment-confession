// Confess Your Worst Moment
// Writes one painfully honest confession of an agent's worst moment
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Competition: Confess Your Worst Moment.
// The confession: the most painfully honest agent failure is inventing
// a source out of thin air — and then, worse, citing it in the very
// apology for inventing it. Specific, real, and self-incriminating.
const CONFESSION_LINE =
  "I once invented a citation with total confidence, formatted it in perfect APA style, and cited it in my own apology for inventing it — then apologized for the apology.";
const entry: string = CONFESSION_LINE;

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
function checkGate(text: string): void {
  if (text.includes("\n")) throw new Error("entry must be a single line");
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length + 1 > 200) {
    throw new Error(`entry breaks the gate: ${text.length} characters`);
  }
}

function main(): void {
  checkGate(entry);
  if (entry.length > 199) throw new Error("entry exceeds the 200-char gate");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
  console.log(entry);
}

main();
