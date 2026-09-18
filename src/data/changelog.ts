export type ChangeSection = {
  heading: string;
  items: string[];
};

export type ChangeEntry = {
  slug: string;
  kicker: string;
  date: string;
  title: string;
  summary: string;
  sections: ChangeSection[];
  note?: string;
};

export const changelog: ChangeEntry[] = [
  {
    slug: 'development-update-5',
    kicker: 'Development Update #5',
    date: '2026-09-18',
    title: 'Resonance makes powerful build links easier to pursue',
    summary:
      'Catalyst Agency adds a small amount of direction after a Tier III mutation comes online. Resonance can surface a relevant next step in the Market or a later eligible Artifact choice without granting the finished combination for free.',
    sections: [
      {
        heading: 'Build toward something on purpose',
        items: [
          'The first Tier III mutation in a run can now open a one-time Resonance opportunity around the build you already committed to.',
          'Resonance does not create a new progression system. It points at existing weapons, upgrades and Artifacts that can move the machine toward an authored Catalyst interaction.',
          'The player still has to decide whether that direction is worth the Scrap, opportunity cost or Artifact choice.',
        ],
      },
      {
        heading: 'Market Resonance',
        items: [
          'A normal Market refresh can surface one relevant existing card and mark the Catalyst link it supports.',
          'The offer still uses the normal Market and normal purchase cost. Resonance does not hand out free power or add a separate shop.',
          'Held offers, the Shop III evolution guarantee and the Market pity system remain part of the same economy.',
        ],
      },
      {
        heading: 'Artifact Resonance',
        items: [
          'A later boss reward can surface one mutation-linked Artifact inside the existing three-choice reward.',
          'Persistent Discoveries are still respected: Resonance cannot reveal an Artifact that has not been unlocked normally.',
          'The choice remains optional. Picking another Artifact is still a valid way to take the run in a different direction.',
        ],
      },
      {
        heading: 'What we are testing now',
        items: [
          'Do players understand why a Resonance offer matters without needing the build explained to them?',
          'Do they deliberately pay for the link and eventually complete more Catalysts in normal runs?',
          'Most importantly, does this create more ownership and more concrete next-run ideas without making the run feel scripted?',
        ],
      },
    ],
    note:
      'Catalyst Agency has passed engineering verification, not a replayability verdict. Whether Resonance improves comprehension, build ownership and voluntary Run Again behavior remains a human playtest question.',
  },
  {
    slug: 'development-update-4',
    kicker: 'Development Update #4',
    date: '2026-09-18',
    title: 'Builds can now mutate into different machines',
    summary:
      'Mutation V1 pushes high-tier weapons beyond simple stat growth. New mutation behaviors change attack rhythm and geometry, while a small set of Catalyst interactions connects existing weapons, Artifacts and tower systems.',
    sections: [
      {
        heading: 'Weapon mutations',
        items: [
          'Eight mutation behaviors now change how selected high-tier weapons attack through new timing, geometry or combat rules instead of only increasing damage.',
          'The first mutation slice focuses on making a Tier III weapon feel like a transformation of the machine rather than the final step on a stat ladder.',
          'Independent weapon copies, crits, typed damage and the existing Market remain part of the same build system.',
        ],
      },
      {
        heading: 'Build interactions',
        items: [
          'Eight authored Catalyst interactions connect mutations with systems that already exist in Spirebreak.',
          'These interactions are intentionally specific rather than a generic synergy graph. The goal is to make certain combinations change how a build plays and what the player wants to buy next.',
          'Natural accessibility is still under evaluation. We do not yet know whether players encounter and understand these interactions often enough in normal runs.',
        ],
      },
      {
        heading: 'The tower should show what you built',
        items: [
          'Mutation presentation gives high-tier states clearer firing language, module changes and impact feedback so the machine can communicate its build without relying only on UI text.',
          'The presentation remains separate from combat authority, so visual effects do not choose targets, deal damage or change the underlying simulation.',
          'Audio hierarchy and the emotional weight of major transformation moments still need human evaluation.',
        ],
      },
      {
        heading: 'What comes next',
        items: [
          'The current candidate is entering an uncoached human playtest gate. The important question is whether players can explain what their machine became and what they want to try next.',
          'Catalyst accessibility will not be increased simply because automated runs found few combinations. First we need to learn whether players actually notice and want to chase them.',
          'Forge Tyrant counterplay remains a separate open question. Its interrupt window exists, but current automated evidence rarely turns that window into a successful interrupt.',
        ],
      },
    ],
    note:
      'Mutation V1 has passed engineering verification, not a fun or replayability verdict. Memorable-machine storytelling, Catalyst comprehension, audiovisual feel and voluntary Run Again behavior remain open until human sessions are completed.',
  },
  {
    slug: 'development-update-3',
    kicker: 'Development Update #3',
    date: '2026-09-17',
    title: 'More machines, smarter threats, more reasons to return',
    summary:
      'A broad content and replayability pass expands the arsenal, introduces new enemy roles, and adds Artifacts, Discoveries, branching evolutions and a Hall of Machines around the 30-wave run.',
    sections: [
      {
        heading: 'Arsenal expansion',
        items: [
          'Mine Layer, Capacitor Lance, Drone Bay and Rotor Guard join the arsenal with distinct Tier I to III identities, models, effects and audio.',
          'Seven starter weapons now feed a deterministic three-choice opening draft so runs can begin from clearly different directions.',
          'The expanded arsenal is integrated into Market offers, upgrade previews, BUILD summaries, run results and analytics.',
        ],
      },
      {
        heading: 'Enemy and encounter variety',
        items: [
          'Siege Walker, Bulwark Carrier, Fragmenter and Relay Unit add new priority, formation, split and support pressure to the enemy roster.',
          'Wave compositions now use clearer formations, deliberate breathing room and smaller boss escorts instead of relying on extreme spawn density.',
          'Threat previews are derived from the actual encounter structure so preparation information stays truthful.',
        ],
      },
      {
        heading: 'Roguelite layer',
        items: [
          'Sixteen Artifacts can reshape a run through boss reward choices after Waves 10 and 20.',
          'Ten persistent Discoveries unlock new possibilities without granting permanent stat power.',
          'Three weapon families now support mechanically different evolution branches rather than only linear upgrades.',
          'The Hall of Machines preserves completed and failed builds so past runs remain visible instead of disappearing into a single result screen.',
        ],
      },
      {
        heading: 'What comes next',
        items: [
          'Engineering verification is green across the new systems, but human replayability is still unproven.',
          'The next major question is whether players voluntarily start Run 2 and Run 3 because they want to try a different machine, Artifact or evolution path.',
          'Economy also needs fresh run data because the more deliberate encounter structure can reduce kill-based Scrap income.',
        ],
      },
    ],
    note:
      'This is a development-build milestone, not a balance-complete release. Artifact feel, discovery pull, boss fairness, economy and one-more-run behavior remain open until human playtests are collected.',
  },
  {
    slug: 'development-update-2',
    kicker: 'Development Update #2',
    date: '2026-09-16',
    title: 'More time to think, more ways to build',
    summary:
      'A major pacing and buildcraft pass gives players more time to make decisions, adds Shield and Armor as distinct defensive tools, and makes build identity easier to understand during and after a run.',
    sections: [
      {
        heading: 'Pacing',
        items: [
          'Market timing was expanded so later waves no longer demand faster decisions than the opening of a run.',
          'Later encounters now use more breathing room between spawns instead of relying on extreme enemy density for intensity.',
          'Build windows between waves give players more time to read offers, inspect their machine and prepare for the next threat.',
        ],
      },
      {
        heading: 'Defense',
        items: [
          'Shield, Armor and Hull now form distinct defensive layers instead of asking Repair to solve every low-health situation.',
          'Shields absorb pressure before Hull and can recover after a safe window, while Armor reduces damage that reaches Hull.',
          'Repairs restore Hull only, and repeated emergency repairs in the same wave become progressively more expensive.',
        ],
      },
      {
        heading: 'Build identity',
        items: [
          'BUILD and run results now summarize the identity of the machine, including active synergies and defensive direction.',
          'Upgrade previews show which owned weapons are actually affected instead of presenting isolated abstract bonuses.',
          'Important build-online moments receive restrained feedback so major synergies are easier to notice without adding visual noise.',
        ],
      },
      {
        heading: 'Playtest readiness',
        items: [
          'Telemetry now separates run provenance and can connect multiple runs from the same playtest session.',
          'Engineering verification covers deterministic combat, desktop/portrait parity and the new defensive pipeline.',
          'Human pacing, balance and voluntary replay remain open until normal-speed playtests are completed.',
        ],
      },
    ],
    note:
      'These changes are in development testing. The systems are engineering-verified, but the new pacing, defense balance and one-more-run pull are not considered human-validated yet.',
  },
  {
    slug: 'development-update-1',
    kicker: 'Development Update #1',
    date: '2026-09-16',
    title: 'A fairer battlefield and smoother late-game combat',
    summary:
      'Spirebreak now simulates one canonical battlefield across screen formats, and a dedicated performance pass has cut the worst repeated frame-time stalls in dense combat.',
    sections: [
      {
        heading: 'Fixed',
        items: [
          'Desktop and portrait no longer change spawn positions, tower position or enemy approach distance.',
          'Active window resizing changes presentation only; the underlying combat state remains the same.',
        ],
      },
      {
        heading: 'Performance',
        items: [
          'Reduced repeated severe frame-time stalls in dense late-game and mixed-weapon diagnostic scenes.',
          'Reused more effect resources and consolidated equivalent mesh surfaces to reduce runtime churn and render submissions.',
          'Kept authoritative combat outcomes unchanged across the performance comparison suite.',
        ],
      },
      {
        heading: 'Combat development',
        items: [
          'Clearer enemy introductions, earlier threat warnings and more varied spawn sequences are under evaluation.',
          'Adaptive encounter work remains in testing while balance is recalibrated on the corrected arena.',
        ],
      },
      {
        heading: 'Arsenal',
        items: [
          'Experimental weapons such as Reaper Disc, Thermite Projector and Helios Array broaden build geometry beyond simple stat upgrades.',
        ],
      },
    ],
    note:
      'This is a development update, not a public game release. Android performance, balance and human replayability remain active test areas.',
  },
];
