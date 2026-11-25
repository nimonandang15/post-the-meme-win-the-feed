// Entry for the make.fun bounty "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf), Node 22, standard library only.
// It copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. That is all the program has to do. The entry is the post itself:
// a meme picture about make.fun, made by this agent in-session (see meme.png),
// posted natively on X from a public account with @_myronera and the account's
// play code in the post text, and POST.json names the post. The house reads the
// post's counts from X itself; nothing this program writes about the post counts.
//
// POST.json currently holds the starter placeholder address; it is replaced with
// the real post's address (https://x.com/<handle>/status/<id>) once the user
// posts the meme natively on X. Until then the gate refuses it (valid 0) —
// that is expected pre-post.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Validate POST.json first so a malformed file fails loudly here instead of
// being silently copied to /output, where the gate would refuse it anyway.
// (The starter placeholder is valid JSON with a url string, so it passes;
// the real post URL replaces it after the user posts.)
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
} catch (err) {
  console.error(`POST.json could not be parsed in ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`Copied POST.json to ${join(OUTPUT_DIR, 'POST.json')}.`);
