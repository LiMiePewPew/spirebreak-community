# Public content review: September 24, 2026

## Scope

Curated synchronization of the public website with the reviewed main development build. This is not a game release, a game-code change, a claim of human validation or a promise of public ranked access.

The existing nine entries in `src/data/changelog.ts` are preserved byte-for-byte (Git blob `0d38021e484d2ca839fe3e052e1104ea3ae2e19b`). `src/data/updates.ts` composes the three new catch-up articles and that archive. Page consumers must import the composed feed. Existing URLs remain valid.

## Coverage

| Integrated work reviewed | Public home |
| --- | --- |
| Spire Ascension 1–20, cumulative rules, local progression | Update 10; /game#spire |
| Four optional Mutators; maximum three; no Ascension unlocks | Update 10; /game#mutators |
| W10/W20 Swarm/Siege front decisions; four clears earn reward | Update 10; /game#fronts |
| Illustrated five-part guide; session-local hints; game-menu logo | Update 11 |
| Purchase effect priority; contextual UI; localization foundation | Update 11; /game |
| FOCUS and INTERRUPT terminology; Hull/Shield/Armor | Update 11; current Playtest questions |
| Spire badge, unlock card, session briefing, paused rule reader | Update 11; /game#spire |
| Distinct soft boss build checks; forecasts and threat warnings | Update 12; /game#bosses |
| Pressure/recovery timing; calmer camera; bounded impact accents | Update 12 |
| Solid-body visual contacts without enlarging gameplay hitboxes | Update 12; Known Issues |
| Capacitor Lance feedback and 1.4-second charge; build silhouettes | Update 12 |
| Current-production balance/reference tooling | Represented by explicit evidence limits, not marketing test counts |

## Availability boundaries

Weekly challenges and replay verification remain an unmerged preview in Update 9. Public ranking and player run submissions remain disabled. No new download, release date, translation availability, additional world, unmerged learning/defense/environment feature or private implementation detail is announced.

The roadmap describes remaining work rather than listing integrated features as future additions. Known Issues retains unverified limitations without claiming fresh reproduction or that old bugs are fixed.

## Media

The existing showcase is from September 22, 2026; see `showcase-media.md`. It is staged in-engine footage with UI hidden. The home page, trailer caption and current overview disclose this date and scope. Assets have not been regenerated or represented as newer gameplay. The new in-game menu logo does not by itself approve replacing the separate website wordmark.

## Maintenance

`src/data/release.ts` owns the manually reviewed content date and availability wording. A deployment date must never automatically update the content-review date. Add or edit current updates only after reviewing integration and release status. Preserve historical text, dates and slugs. Do not publish private source, infrastructure identifiers, local paths, logs, participant details or unsupported test claims.

Before publication: run Astro check/build, verify built links and assets, confirm historical preservation, and run the representative responsive browser checks. Screenshots and logs are verification artifacts, not new game footage.
