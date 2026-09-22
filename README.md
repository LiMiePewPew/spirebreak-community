# Spirebreak Community & Development Hub

Public development site for **Spirebreak**. This repository contains curated public information only. The private game repository remains private.

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

The site is fully static. Optional GitHub issue data is fetched at build time and falls back to an empty state if the public repository/API is unavailable.

## Content model

- `src/data/changelog.ts` — player-facing development updates
- `src/data/development.ts` — future-only `NEXT / LATER / EXPLORING` roadmap and current test questions
- `src/data/known-issues.ts` — curated known issues
- GitHub Issues — public bug reports and feature requests
- `public:known-issue` label — makes an issue eligible for the website's public issue tracker

Give each fact one primary home: dated changes in Updates, future work in the
Roadmap, availability and feedback questions in Playtest Status, and current
limitations in Known Issues. The home page introduces the game and links to the
latest updates. Link between these pages instead of copying whole feature or
status lists. Preserve published update dates and historical articles.

Do not copy private game-repository content into this repository without reviewing it for local paths, secrets, internal infrastructure, private participant information, security reports or unannounced plans.

## Publish the GitHub repository

The public repository is `LiMiePewPew/spirebreak-community`. Push reviewed website changes to `main`; use `./scripts/setup-labels.sh` when the public issue-label taxonomy needs to be created or repaired.

## Cloudflare Pages

Current official Cloudflare Pages settings for Astro:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

In Cloudflare: **Workers & Pages → Create application → Pages → Import an existing Git repository** and choose `LiMiePewPew/spirebreak-community`.

No Cloudflare adapter is required because this project is intentionally static. Preview deployments can be enabled for branches/PRs through the Pages Git integration.

## GitHub token

The public GitHub API works without a token for small builds. If build frequency eventually hits anonymous API limits, add `GITHUB_TOKEN` as a **Cloudflare build environment variable**. Never expose it as `PUBLIC_GITHUB_TOKEN`.

## Current public stance

This website is a development hub, not a promise that the game is release-ready. Human pacing and replayability, post-overhaul balance, and Android performance are explicitly tracked as open work.
