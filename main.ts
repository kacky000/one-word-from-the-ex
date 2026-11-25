import { mkdirSync, writeFileSync } from "node:fs";

// The one word my ex would use to describe me.
const word = "Potential";

const chars = [...word].length;
if (chars < 1 || chars > 24 || /\s/.test(word)) throw new Error(`"${word}" must be one word of at most 24 characters`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, word);
