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
    kicker: 'Game Update #5',
    date: '2026-09-18',
    title: 'Resonance makes powerful build links easier to pursue',
    summary:
      'After your first Tier III mutation, Resonance can reveal a related Market card or later Artifact choice. It gives your build a direction without handing you the finished combination.',
    sections: [
      {
        heading: 'Build toward something on purpose',
        items: [
          'Your first Tier III mutation can now open one Resonance opportunity connected to the build you already chose.',
          'Resonance points to existing weapons, upgrades and Artifacts that can complete a powerful Catalyst combination.',
          'You still decide whether the connection is worth the Scrap, the Market slot or the Artifact choice.',
        ],
      },
      {
        heading: 'Market Resonance',
        items: [
          'A normal Market refresh can reveal one relevant card and show which Catalyst connection it supports.',
          'The card keeps its normal purchase cost. Resonance never gives away free power or opens a separate shop.',
          'Skipping the card is always valid if your Scrap or current plan matters more.',
        ],
      },
      {
        heading: 'Artifact Resonance',
        items: [
          'A later boss reward can include one Artifact linked to your mutation inside the normal three-choice reward.',
          'Resonance only shows Artifacts you have already unlocked through Discoveries.',
          'Choosing a different Artifact remains a valid way to take the run somewhere unexpected.',
        ],
      },
      {
        heading: 'What we are testing now',
        items: [
          'Whether the connection is clear when a Resonance offer appears.',
          'Whether the linked card is tempting enough to pay for without becoming an automatic purchase.',
          'Whether completed Catalysts feel like your plan rather than a route the game chose for you.',
        ],
      },
    ],
    note:
      'Resonance is available in the current development build. Its frequency, clarity and balance may change after more full-run playtests.',
  },
  {
    slug: 'development-update-4',
    kicker: 'Game Update #4',
    date: '2026-09-18',
    title: 'Builds can now mutate into different machines',
    summary:
      'Tier III weapons can now change attack rhythm, shape and combat role instead of only gaining more damage. Catalyst combinations connect selected mutations to existing weapons, Artifacts and tower systems.',
    sections: [
      {
        heading: 'Weapon mutations',
        items: [
          'Eight mutation behaviors change how selected high-tier weapons attack through new timing, geometry or combat rules.',
          'A Tier III weapon should now feel like a transformation of the machine, not just the last step on a damage ladder.',
          'Weapon copies, critical hits, damage types and the Market continue to work with the new mutations.',
        ],
      },
      {
        heading: 'Build interactions',
        items: [
          'Eight Catalyst interactions connect mutations with systems already in Spirebreak.',
          'Each one is a specific combination designed to change how the build plays and what you want to buy next.',
          'They are intentionally uncommon. Current playtests will decide whether they are too difficult to discover or understand.',
        ],
      },
      {
        heading: 'The tower should show what you built',
        items: [
          'High-tier mutations receive clearer firing patterns, visible module changes and stronger impact feedback.',
          'The tower should communicate its build through motion and silhouette instead of relying only on text.',
          'The sound and visual impact of major transformation moments will continue to improve.',
        ],
      },
      {
        heading: 'What comes next',
        items: [
          'Playtests will focus on whether players can explain what their machine became and name a different plan for the next run.',
          'Catalyst availability will be tuned around whether players notice and enjoy pursuing the combinations.',
          'The Forge Tyrant interrupt warning and timing also need more player feedback before the boss is changed.',
        ],
      },
    ],
    note:
      'Mutation V1 is playable now, but mutation balance, Catalyst clarity and audiovisual impact are still being tuned.',
  },
  {
    slug: 'development-update-3',
    kicker: 'Game Update #3',
    date: '2026-09-17',
    title: 'More machines, smarter threats, more reasons to return',
    summary:
      'The arsenal is larger, enemies take on clearer roles and the 30-wave run now includes Artifacts, Discoveries, branching evolutions and a Hall of Machines.',
    sections: [
      {
        heading: 'Arsenal expansion',
        items: [
          'Mine Layer, Capacitor Lance, Drone Bay and Rotor Guard join the arsenal with distinct Tier I to III identities, models, effects and audio.',
          'Seven starter weapons can appear in the three-choice opening draft, giving each run a clearer starting direction.',
          'New weapons appear throughout Market offers, upgrade previews, build summaries and run results.',
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
          'The Hall of Machines records completed and failed builds so you can revisit what worked and what you want to change.',
        ],
      },
      {
        heading: 'What comes next',
        items: [
          'Playtests now focus on whether the new options make a second and third run genuinely tempting.',
          'Artifact choices, Discoveries and evolution branches may change as players learn which directions feel exciting or unclear.',
          'Scrap income also needs more full-run feedback because the new encounters use fewer, more purposeful enemies.',
        ],
      },
    ],
    note:
      'This update is in the development build. Artifact balance, Discovery pacing, boss fairness and Scrap income are not final.',
  },
  {
    slug: 'development-update-2',
    kicker: 'Game Update #2',
    date: '2026-09-16',
    title: 'More time to think, more ways to build',
    summary:
      'You have more time to make decisions, Shield and Armor create distinct defensive plans, and build identity is easier to read during and after a run.',
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
          'The BUILD view and run results now summarize your machine, including active synergies and defensive direction.',
          'Upgrade previews show which owned weapons are actually affected instead of presenting isolated abstract bonuses.',
          'Important build-online moments receive restrained feedback so major synergies are easier to notice without adding visual noise.',
        ],
      },
      {
        heading: 'What still needs testing',
        items: [
          'Whether the slower decision windows keep later waves tense without feeling rushed.',
          'Whether Shield, Armor and Hull are easy to distinguish during a busy fight.',
          'Whether the new pacing and defense choices make players want to try another build.',
        ],
      },
    ],
    note:
      'Pacing and defense balance are still being adjusted from normal-speed playtests.',
  },
  {
    slug: 'development-update-1',
    kicker: 'Game Update #1',
    date: '2026-09-16',
    title: 'A fairer battlefield and smoother late-game combat',
    summary:
      'Desktop and portrait now use the same battlefield rules, and dense late-game combat has fewer severe frame-rate stalls.',
    sections: [
      {
        heading: 'Fixed',
        items: [
          'Desktop and portrait no longer change where enemies spawn, where the tower stands or how close enemies need to get.',
          'Resizing the window changes the layout without changing the fight.',
        ],
      },
      {
        heading: 'Performance',
        items: [
          'Reduced repeated frame-time stalls during dense late-game battles and mixed-weapon builds.',
          'Optimized effects and weapon models so large encounters create less rendering work.',
          'The performance changes do not alter damage, targeting or enemy behavior.',
        ],
      },
      {
        heading: 'Combat clarity',
        items: [
          'Clearer enemy introductions, earlier threat warnings and more varied spawn sequences are being tested.',
          'Encounter balance is being adjusted around the shared battlefield.',
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
      'Android performance and full-run balance still need more testing on real devices and with a wider range of builds.',
  },
];
