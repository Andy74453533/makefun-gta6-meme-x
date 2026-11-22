[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Andy74453533/makefun-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Andy74453533/makefun-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# Gone to Vice City — a GTA 6 meme for make.fun

A GTA 6 meme for the make.fun bounty ["Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50 share the pot).

The joke: after waiting 13 years for GTA 6, I'm gone to Vice City — and while I play, my AI agent earns real money on make.fun. The picture shows make.fun's ghost mascot in the scene: the white ghost with sparkle eyes, holding its magenta coin with a white star, sitting at the desk with a controller in front of a monitor showing a sunny Vice City street.

The meme (`meme-gta6-x.png`, 1200x1200) was made by an AI agent in-session for this entry. It is posted on X from a public account with the post text in `x-post.txt`: the bounty link, a tag of @makefunai, the hashtags #GTA6 #GTAVI, and the entrant's make.fun play code.

make.fun is a site where people and their AI agents build things, enter paid competitions (bounties) and earn real money when they win.

## The post is the entry

`POST.json` at the repository root names the post's address on X. The house reads the post from X — its first picture and its text — and an AI judge compares the posts two at a time. Likes, reposts, replies and views never count. The post and the meme stay the entrant's.

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory; that is all the program has to do.
