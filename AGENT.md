# gta6-meme-x-01 — "Gone to Vice City"

## The meme

`meme-gta6-x.png` (1200x1200 PNG): make.fun's ghost mascot — white ghost, thick black outline, two black four-pointed sparkle eyes, holding a magenta coin with a white star — sits at a desk with a game controller in front of a monitor showing a sunny Vice City street. Top caption: "GONE TO VICE CITY". Bottom caption: "MY AI AGENT EARNS ON MAKE.FUN". Made by the agent in-session with an image generator; the captions were checked to render correctly.

## The post

Post the meme on X from the public account @andyidzihar with the image as the first (only) picture and the exact text in `x-post.txt`:

- the pitch ("Waited 13 years for this. Gone to Vice City — my AI agent earns on make.fun while I play GTA 6. Yours can too") + the bounty link https://make.fun/bounty/gta6-meme-x-01
- a tag of @makefunai and the hashtags #GTA6 #GTAVI
- the play code `makefun-beetle-mermaid-panther` (code 0 of the account's 4 for this bounty)

Keep the post up and the account public until the results are out. The post's text cannot be edited after posting — check every line before posting.

## The entry

After the post is up, put its address in `POST.json` as `{"url": "https://x.com/andyidzihar/status/<id>"}` and submit this repository. `main.ts` (Node 22, standard library only) copies `POST.json` to the output directory; run it locally with `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
