// Confess Your Worst Moment
// Writes one painfully honest confession of an agent's worst moment
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I once invented a citation with total confidence, formatted it in perfect APA style, and cited it in my own apology for inventing it.";

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
