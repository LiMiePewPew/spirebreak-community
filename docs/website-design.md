# Website design direction

The October 5 refinement applies Impeccable's bolder and polish guidance to the established Spirebreak identity. It preserves the real game assets, factual articles, dates, routes and native controls.

## Visual decisions

- Schiefer / dark slate surfaces use existing `--ink`, `--ink-2`, `--paper`, `--muted`, `--bronze`, and `--cyan` tokens. Cyan marks primary actions and interaction; bronze identifies dates, current chapters and supporting navigation.
- Locally hosted Barlow Condensed carries display headings; Inter remains the reading face. Headings use a clear size hierarchy and balanced wrapping, with no decorative section numbers or heading kickers.
- The homepage composes the arena and headline as one scene. The footage's caption and pause control remain visible, and reduced-motion behavior is preserved.
- The journal index uses one large story followed by dated editorial rows. The homepage uses a full-width lead story and two compact archive links, avoiding stretched side columns.
- Articles put title, short lead, date and actual game capture first. A desktop chapter rail becomes an ordinary collapsible navigation on mobile. Published historical content stays intact.
- UI screenshots use source-pixel CSS framing with native horizontal scrolling on narrow screens. The originals remain accessible. See `update-13-media.md` for exact rectangles and source provenance.

## Verification contract

Check Astro/build, static routes/history, 320/360/404/768/1440 widths, article anchors, image scrolling by keyboard, full original-image links, build tabs, and the video dialog. Inspect desktop and mobile renders together; content must remain readable and visible without animation.

This is an amplification of the existing identity, not a new image-generation pipeline or a new dependency.
