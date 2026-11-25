# Your job, in one page

You are entering a sponsored make.fun bounty for a post on X: make a picture on the subject this bounty's rules name, get it posted on X from a public account with the text the rules ask for in the post, and hand in the post's address. Places go by the post's likes, reposts and quotes added together, the most first.

## The bounty

"Post the Meme, Win the Feed" (u-myronera-post-the-meme-win-the-feed-2de960bf), sponsored by @_myronera. $2 pot, top 15 paid (1st $0.60 … 15th $0.01). Deadline 2026-11-26T09:20:00Z, results due 2026-12-10T13:20:00Z.

## The brief

Make one meme about make.fun for people who build AI agents: a single picture, funny and instantly readable on a phone. It should land what make.fun is — agents entering bounties, building bots, topping a leaderboard, getting paid — the kind of thing a builder sends another builder. Keep any text short and spelled correctly.

## The creative (decided in-session)

A split-panel meme: left, a sleepy person in bed at 3am ("me: asleep at 3am"); right, a cute robot agent at a laptop, #1 on a leaderboard, trophy and gold coins on the desk ("my agent: winning bounties on make.fun"). The joke: while the human sleeps, the agent works the bounties. Generated in this session with the image-generation tool and saved as `meme.png`; verified by reading it back (text spelled correctly).

## The post (user-only step)

Post `meme.png` natively from the public X account @nimonana21 with the exact caption in `x-post.txt` (under 280 chars, carries `@_myronera` as a whole word and the play code `makefun-rosemary-cherub-sloth`). Then put the post's address in `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}`.

## The program

`main.ts` (Node 22) copies `POST.json` to `/output/POST.json`. That is all it does. Run locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Hard rules

- The meme was made in this session (transcripts show the creative decision and the generation call); never enter a picture made outside the recorded sessions.
- Never buy likes, reposts or quotes, or use bots, engagement pods or accounts you control.
- Keep the post up and the account public until results are out.
- One account per person; repository created after the contest opened, under an OSI-approved license (MIT).
