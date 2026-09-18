# Gameplay media

The website uses real runtime screenshots, curated for public release. The game
source remains private. This repository receives approved media and public display
metadata only; it does not receive the source capture archive or internal reports.

## Source of truth

`src/data/media.ts` is generated. Components resolve media by stable `id`; paths,
variants, dimensions, alt text, captions and the represented game build live there.
`GameMedia.astro` handles responsive images and future silent gameplay loops.
The homepage uses a reviewed combat crop for the hero, five gameplay captures in
the gallery (the Artifact view trims empty margins), and a separate portrait screenshot. Full-size links preserve the UI
for visitors who want to inspect it. No generated or simulated marketing artwork
is substituted for gameplay.

The game build identifier describes the capture, not the website release. It is
metadata, not player-facing promotional copy. Portrait footage demonstrates the
layout; it does not certify an Android release or physical-device performance.

## Updating the selection

The maintainer captures real production gameplay, audits each candidate and
explicitly approves the exact bytes in a private allowlist. Source hashes prevent
an edited capture from inheriting an old approval. The sync tool previews by
default; an explicit local apply writes only generated media beneath
`public/media/game/` and `src/data/media.ts`.

1. Capture and individually review pixels, visible UI and public copy.
2. Approve the selection, crop and source hash in the private workflow.
3. Run its dry run and review the proposed file list.
4. Apply locally on a website work branch.
5. Run `npm ci`, `npm run check`, `npm run build` here.
6. Review the website at 360, 390, 768, 1280 and 1440 pixels, including actual
   responsive requests, layout shift and full-size media links.
7. Review the repository diff and human-visible result before explicitly
   authorizing a push and deployment.

The tool never pushes, deploys or automatically deletes stale media. An asset
marked deprecated stops being generated; old public files remain until separately
reviewed for removal. Replacing an image uses a stable ID and freshly approved
bytes. Deploy all generated variants and metadata together. Do not manually edit
one derivative, add screenshots by copying an entire folder, or commit originals,
private paths, debug logs, analytics or environment files.

## Formats and budgets

- Lossless WebP fallback; AVIF quality 90 with 4:4:4 chroma when available.
- Widths 640 / 960 / 1440 / 1920 only when source size permits, plus native size.
  No generated enlargement. Source metadata is removed.
- Preferred limits: hero below 500 KB, gallery below 300 KB, thumbnails below
  150 KB. Preserve screenshot text quality rather than forcing a byte target.
- Hero is eager/high-priority; other images are lazy. Width/height reserve layout
  space. The HTML `sizes` values track the homepage breakpoints.
- Runtime screenshots are informative: describe visible content in alt text.
  Captions should be brief and player-facing.

## Future video

The generated `GameMedia` union also supports `kind: 'video'`: WebM, optional MP4,
reviewed image poster, dimensions, alt and caption. Only actual reviewed footage
is eligible. Prefer short 6–10-second loops. The private encoder removes audio and
source metadata. The component supplies muted autoplay, loop, playsinline, poster
and controls; reduced motion pauses automatic playback. No video ships in this
selection. Never use an animated GIF for a long gameplay sequence.

## Social and hosting

The reviewed hero is the OpenGraph/Twitter large-card preview candidate. Set
`SITE_URL` to the actual public site origin when building for a custom domain.
Cloudflare Pages' `CF_PAGES_URL` is used otherwise. Local builds deliberately use a
relative media URL rather than inventing a deployed hostname. Verify the absolute
`og:image` URL against the final domain before publishing.

Astro remains static (`dist/`); no media server, third-party CDN, image service,
client framework or new runtime dependency is required. Issue/feature links and
build-time public GitHub issue loading are unchanged. Engineering information
remains on Development, Changelog, Roadmap and Issues, with concise links below
the gameplay content on the homepage.

## Existing import command

`npm run media:import -- --game-repo <game-checkout> --dry-run` remains available.
It delegates to the reviewed private sync tool, so there is only one approval,
hash, optimization and metadata contract. Use a checkout containing that tool
and its pinned Python dependencies. Set `SPIREBREAK_MEDIA_PYTHON` to the Python
executable in that environment when it is not the default `python3`. Explicit
`--apply` is still required to write. The four older public image URLs are retained
for compatibility and reported as stale; no automatic deletion is introduced.
