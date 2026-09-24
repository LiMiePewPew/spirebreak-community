# Spirebreak Community & Development Hub

Public development site for **Spirebreak**. This repository contains curated public information only. The private game repository remains private.

## Local development

```bash
npm ci
npm run dev
npm run check
npm run build
python3 scripts/verify-site.py
npm run preview
```

The site is fully static. Optional GitHub issue data is fetched at build time and falls back to an empty state if the public repository/API is unavailable.

## Content model

- `src/data/updates.ts`: the composed public update feed, including new catch-up articles and the unchanged archive.
- `src/data/changelog.ts`: nine preserved historical updates. Do not overwrite published articles or dates.
- `src/data/release.ts`: reviewed content date and shared availability wording, never an automatic deployment timestamp.
- `src/pages/game.astro`: the current development-game overview, separate from dated announcements.
- `src/data/development.ts`: future-only roadmap and current playtest questions.
- `src/data/known-issues.ts`: curated limitations, not a claim of fresh reproduction.
- GitHub Issues: public bug reports and feature requests. `public:known-issue` makes an issue eligible for the public tracker.

Give each fact one primary home: current behavior in The Game, dated changes in Updates, future work in the Roadmap, availability and feedback in Playtest, and limitations in Known Issues. The home page introduces the game and links to the current overview and updates. Preserve historical URLs and distinguish development previews from integrated features.

See `docs/CONTENT_REVIEW.md` for September 24 coverage and publication boundaries. See `docs/showcase-media.md` for the older, staged September 22 media. New website copy does not make footage new.

Do not copy private game-repository content here without reviewing it for local paths, secrets, infrastructure, private participant information, security reports or unannounced plans.

## Verification and publication

The single `Website verification` job checks Astro types/build, local links and assets, historical preservation, current content, responsive layouts and gallery/video interactions. Browser tools are installed only in the verification environment without changing the lockfile. Screenshots and logs are short-lived workflow artifacts, not published gameplay media.

Push reviewed website changes through a checked PR to `main`. The existing Cloudflare integration publishes production. A successful build is not proof that a custom domain is reachable; verify production separately. Use `./scripts/setup-labels.sh` only when the public issue-label taxonomy needs repair.

Cloudflare static-build settings:

- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`

No Cloudflare adapter is required. Production domain configuration remains in the existing Cloudflare project; this update does not change it.

## GitHub token

The public GitHub API works without a token for small builds. If build frequency hits anonymous limits, configure `GITHUB_TOKEN` as a Cloudflare build environment variable, never as `PUBLIC_GITHUB_TOKEN`.

## Current public stance

This is a development hub, not a release-readiness promise. Full-run balance, new-player understanding, higher Spire and Mutator tuning, and physical-device performance remain open. Public ranked play and run submissions remain disabled.
