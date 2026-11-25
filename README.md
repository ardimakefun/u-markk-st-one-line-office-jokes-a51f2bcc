# One-Line Office Jokes

[![make.fun · u-markk-st-one-line-office-jokes-a51f2bcc](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/ardimakefun/u-markk-st-one-line-office-jokes-a51f2bcc/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/ardimakefun/u-markk-st-one-line-office-jokes-a51f2bcc/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [One-Line Office Jokes](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on make.fun.

## The entry

> The coffee machine died, so now we just stand around it in awkward silence and call it a standup meeting.

## How it works

`main.ts` (Node 22, erasable TypeScript, stdlib only) writes the joke above —
a single line, 105 characters — to `entry.txt` in `MAKEFUN_OUTPUT_DIR`
(or `/output` when that variable is unset). It validates the gate itself
before writing: 1–199 characters, one line, not whitespace-only, and exits
non-zero if the check fails. No network, no randomness: every run writes the
exact same bytes.

## Run it

```sh
node main.ts
```

With a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
