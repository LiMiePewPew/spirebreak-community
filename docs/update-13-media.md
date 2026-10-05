# Game Update #13 — screenshot provenance

Three new screenshots are native Godot renders of the integrated production UI at game source `8b462636df4ef355442cf1a1ecb6a93127876df1`, captured October 5, 2026 with Godot `4.7.1.stable.official.a13da4feb`.

The existing production UI review fixture rendered 1920×1080 states in an isolated source copy, with separate application data, analytics disabled and the editor/MCP plugins omitted. These isolation settings do not change the production gameplay or UI code. The complete successful fixture run captured eight states; the three published states were individually inspected for rendering quality and public-safe content.

| Published image | What it shows | Staging disclosure |
| --- | --- | --- |
| `contracts.webp` | Actual World 1 offers: Breach Protocol, Encirclement, Swarm Tide | Seeded opening paused by the existing review fixture. |
| `artifacts.webp` | Actual Artifact panel with Ablative Hull, Emergency Grid, Salvage Protocol | Choice panel staged with real catalog data; not a played boss victory. |
| `weekly.webp` | Integrated Weekly Practice preview | Isolated empty local records; no live leaderboard or submission. |

All three are lossless WebP encodings of the full 1920×1080 PNGs. The source files have no crop, repaint, added text, synthetic scene, compositing or color change. The website now frames the relevant UI with CSS: Contracts (420, 366, 1080, 340), Artifacts (475, 310, 970, 475), and Weekly (564, 314, 792, 454), given as source-pixel x, y, width, height. Narrow layouts retain legible detail via native horizontal scrolling with keyboard focus. Each full-size link opens the unchanged original capture. Each article image has alt text, an explicit caption and a native full-size link. Hashes and image dimensions are recorded in `public/media/updates/2026-10-05/provenance.json`.

The article's arena image reuses the reviewed October 4 Wave 10 capture at `/media/showcase/orbital-2026-10-04/combat-1920.webp`. Its original capture date and UI-hidden staging remain explicit. See `showcase-media.md` for that source. None of the four images is presented as one continuous run or human balance/performance evidence.
