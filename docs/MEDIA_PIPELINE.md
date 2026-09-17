# Spirebreak media pipeline

The game repository is private. This community repository is public. Media crosses that boundary only through an explicit allowlist.

## Source of truth

The private game repository owns `docs/marketing/community-media.json`.

Only entries with `approved_public: true` are eligible for import. The importer never scans arbitrary folders and never publishes unlisted files.

Expected manifest shape:

```json
{
  "version": 1,
  "game_build": "<verified game SHA>",
  "assets": [
    {
      "id": "hero-combat",
      "source": "docs/marketing/captures/hero-combat.webp",
      "kind": "image",
      "approved_public": true,
      "category": "hero",
      "placement": ["home.hero", "home.gallery"],
      "width": 1600,
      "height": 900,
      "alt": "Spirebreak tower fighting a mixed enemy wave with several active weapons.",
      "caption": "A late-run machine under pressure.",
      "focus": "50% 50%"
    }
  ]
}
```

## Safety boundary

`scripts/import-game-media.mjs`:

- defaults to dry-run
- accepts only approved manifest entries
- accepts only image/video extensions intended for the public website
- rejects absolute paths, `..` traversal and realpath/symlink escapes from the game repository
- writes only below `public/media/game/`
- generates the central `src/data/media.ts` registry
- never deletes stale public assets automatically
- does not copy source code, reports, logs, analytics or arbitrary directories

The importer intentionally does not alter image pixels. Captures should be reviewed and optimized in the private game repository before approval so the public copy is deterministic and does not silently degrade quality.

## Workflow

1. Generate real runtime captures from a verified Spirebreak build.
2. Review captures for debug UI, private information and marketing quality.
3. Optimize approved images/videos in the private repository.
4. Add only approved files to `community-media.json`.
5. From the community repository run a dry-run:

```bash
npm run media:import -- --game-repo ../spirebreak
```

6. Inspect every planned copy and generated media record.
7. Apply deliberately:

```bash
npm run media:import -- --game-repo ../spirebreak -- --apply
```

If your shell passes npm arguments differently, invoke the script directly:

```bash
node scripts/import-game-media.mjs --game-repo ../spirebreak --apply
```

8. Run:

```bash
npm run check
npm run build
```

9. Review mobile and desktop layouts before merging/publishing.

## Placements

Current public placements:

- `home.hero`: one primary gameplay image or muted gameplay video
- `home.gallery`: four to six selected gameplay captures

Additional placements can be added without changing the safety model.

## Video

The registry supports `kind: "video"`. WebM is preferred for short muted gameplay loops, with MP4 added later when a fallback is needed. Autoplay media must remain muted and `playsinline`.

## Publishing rule

Marketing media must show real production mechanics and real visual states. Do not enable fake damage, unavailable VFX, impossible weapon combinations or debug-only presentation solely for screenshots.
