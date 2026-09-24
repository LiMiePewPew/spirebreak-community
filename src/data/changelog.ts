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
    slug: 'development-update-9',
    kicker: 'Game Update #9',
    date: '2026-09-24',
    title: 'A fair leaderboard starts with a run we can verify.',
    summary:
      'A good weekly challenge should reward the machine you built and the decisions you made, not an edited score. We have tested the first run-recording and replay checks on a development branch. Public ranked play is not open yet.',
    sections: [
      {
        heading: 'Same challenge, different machines',
        items: [
          'The weekly challenge prototype fixes the starting seed, difficulty and modifiers so different build decisions can be compared under the same setup.',
          'Practice uses a fresh collection and keeps its results separate from normal progression. Local records are not treated as verified leaderboard entries.',
          'The leaderboard foundation keeps each player\'s best verified attempt and its build details. The aim is to make another player\'s machine interesting to learn from, not just show a number above yours.',
        ],
      },
      {
        heading: 'Replay the decisions, not the claimed score',
        items: [
          'The new recorder captures committed choices: your starter, purchases, rerolls, repairs, Core, Artifacts, targeting priorities and weapon evolutions.',
          'A separate verifier then plays those decisions back through the actual Spirebreak game simulation. It works out the ending, completed waves, active time and final build itself instead of trusting values sent by the player\'s device.',
          'In the tested service, an uploaded attempt stays off the board until verification succeeds. An action that cannot legally happen is rejected. A technical verification failure holds the result back rather than automatically banning the player.',
        ],
      },
      {
        heading: 'What happens when someone gives themselves extra Scrap?',
        items: [
          'We tested two identical game instances and gave only the client side an extra one million Scrap. Both then attempted the same rerolls.',
          'The unchanged server simulation rejected a reroll as soon as its real wallet could not afford it, without spending Scrap or advancing the Market roll. Edited client money did not become permission to buy.',
          'That is a controlled memory-edit test, not a claim that every cheat is solved. This approach does not add a kernel driver or scan other programs on a player\'s device.',
        ],
      },
      {
        heading: 'What has actually passed',
        items: [
          'Two automated strategies completed runs in the real game simulation: one lost during Wave 17 after clearing 16 waves, the other during Wave 10 after clearing nine. Each recording was independently replayed twice, with matching results, active time and build details.',
          'The full path from an authenticated test attempt to an isolated replay and a verified entry also passed on a temporary test leaderboard. A second attempt containing an unavailable Core choice was rejected without changing the board.',
          'The focused checks passed 65 Python tests and 18 Godot tests. These are engineering checks and complete automated defeats, not human playtests, Wave 30 victory evidence or a claim that overall balance is finished.',
        ],
      },
      {
        heading: 'Why ranked is still closed',
        items: [
          'The current replay profile uses fixed simulation steps. Real player inputs, normal frame rates and the supported desktop, Web and Android builds still need to be checked for consistent results.',
          'We also need full victories, more manipulation tests, and the player-facing sign-in, submission and result-status flow before a public rollout. A legal replay alone cannot prove that a human, rather than a bot, made the decisions.',
          'For now, recording is an explicit local diagnostic option and nothing is automatically uploaded. This work does not change damage, prices, enemy balance or the rules of ordinary runs.',
        ],
      },
    ],
    note:
      'Development-branch preview, not a release announcement. The weekly challenge and replay work has not been merged into the main game build. Public ranking and player run submissions remain disabled, and no launch date has been announced.',
  },
  {
    slug: 'development-update-8',
    kicker: 'Game Update #8',
    date: '2026-09-22',
    title: 'Choose your targets. Decide what survival is worth.',
    summary:
      'Your weapons still fire automatically, but you can now set their targeting priorities. Keeping Scrap in Reserve can earn a small payout, while enemies pushing closer make spending it a real alternative.',
    sections: [
      {
        heading: 'Give the machine a priority',
        items: [
          'Balanced keeps each weapon family\'s usual targeting. Intercept favors enemies closing on the Sentinel, Hunt favors tactical threats such as support and siege units, and Break favors bosses, Checkpoints and durable targets.',
          'During combat, changing priority starts a six-second command cooldown. Between waves, you can change it freely.',
          'These are targeting preferences, not damage boosts or manual aiming. Weapon range, committed attacks and each weapon\'s role still matter; radial and contact weapons keep their existing behavior.',
        ],
      },
      {
        heading: 'Save Scrap, or spend it to stay alive',
        items: [
          'Carry Scrap into a wave and protect that Reserve to earn +1 Scrap per 20 held, up to +5, after a successful clear. Wave 30 has no Reserve payout.',
          'The reward starts from the Scrap you bring into the wave. Spending below that amount can lower it; earning Scrap during the fight cannot raise the current wave\'s Reserve again.',
          'Your Scrap is never locked. Buy the upgrade, repair or reroll when you need it. Purchase previews and repair tooltips show the Reserve you would give up.',
          'Reserve is separate from Income: one rewards holding Scrap through a fight, the other asks you to invest in future payouts.',
        ],
      },
      {
        heading: 'More pressure near the tower',
        items: [
          'After the opening six waves, selected melee threats can enter closer along their attack lanes and commit more strongly as they approach the Sentinel.',
          'Breachers begin their warning farther out and cover more ground with their dash. Bosses and ranged attackers keep their own approach rules.',
          'Ordinary enemies after Wave 10 have more health, with larger increases for heavy and tactical roles. This durability adjustment does not increase their attack damage or change boss and Checkpoint health.',
        ],
      },
      {
        heading: 'What we want to learn from a run',
        items: [
          'Did changing target priority help you answer a threat you could see?',
          'Was there a moment when keeping Reserve stopped being worth the risk?',
          'Did enemies reaching the tower make defense useful without making damage feel unavoidable?',
        ],
      },
    ],
    note:
      'These changes are in the development build. Targeting usefulness, Reserve rewards and enemy pressure still need normal-speed playtest feedback; this is not a public release announcement.',
  },
  {
    slug: 'development-update-7',
    kicker: 'Game Update #7',
    date: '2026-09-22',
    title: 'Read the attack. Build your answer.',
    summary:
      'Recent changes give waves distinct attack directions and put more of a purchase\'s consequences in front of you. A strong build now has different shapes of pressure to answer across the same 30-wave run.',
    sections: [
      {
        heading: 'Waves have a direction',
        items: [
          'Some waves concentrate on one front or a narrow breach. Others split across opposite sides, surround the arena or screen a dangerous ranged group with approaching enemies.',
          'Subtle perimeter marks indicate where pressure is coming from. A quieter sector is only less threatened, not cover or a safe zone.',
          'The tower stays stationary. Your answer comes from weapon coverage, target priorities and the build you bring into the next wave.',
          'These attack patterns rearrange existing encounters rather than adding new enemy types or extra rewards. Less concentrated waves sit between sharper pressure peaks.',
        ],
      },
      {
        heading: 'Know what you are buying',
        items: [
          'Purchase previews explain more of an upgrade\'s outcome, including when an investment pays off rather than only showing an immediate stat change.',
          'Growth upgrades distinguish future wave benefits from power you get now. Supporting purchases and affected weapons help connect an offer to the machine you already own.',
          'Player-facing wording has been simplified so more decisions can be understood directly from the offer.',
        ],
      },
      {
        heading: 'What still needs a player\'s eye',
        items: [
          'Can you recognize a dangerous front early enough to change your plan?',
          'Do different attack patterns reward different weapon combinations?',
          'Does a purchase preview explain the tradeoff before you spend, especially on a phone-sized screen?',
        ],
      },
    ],
    note:
      'This is a catch-up on development changes from September 19-21, published September 22. Wave readability and purchase clarity remain playtest questions, not finished balance claims.',
  },
  {
    slug: 'development-update-6',
    kicker: 'Game Update #6',
    date: '2026-09-22',
    title: 'A machine you can see grow, and hear fight.',
    summary:
      'The Sentinel gains a stronger silhouette as your build develops. Distinct world atmospheres, weapon recoil, impact reactions and new sound cues give the journey from starter tower to late-run machine more visible and audible detail.',
    sections: [
      {
        heading: 'Your build changes the Sentinel',
        items: [
          'The starting Foundation silhouette can grow into a wider Fortified chassis and an Ascendant form with taller crown structures as the loadout develops.',
          'Weapon families, high-tier upgrades, mutations and defenses remain part of the machine\'s visible identity.',
          'These chassis stages describe what your build looks like. They are not extra tower levels, stat bonuses or weapon-capacity limits.',
        ],
      },
      {
        heading: 'Three chapters, three atmospheres',
        items: [
          'The opening chapter uses a colder bastion atmosphere. The second shifts toward a fractured forge, while the final chapter moves into a darker crown-storm setting.',
          'Lighting, distant scenery and arena seams change with the chapter. Waves 11 and 21 receive a brief environmental arrival effect.',
          'These are presentation changes to the existing three-chapter run, not additional worlds or a longer campaign.',
        ],
      },
      {
        heading: 'Firepower has a physical response',
        items: [
          'Weapon mounts recoil, enemies react to impacts, and major shots and boss moments can produce brief camera impulses.',
          'Heavy Cannon, Rail Lance and Siege Mortar use different motion and sound responses instead of sharing one generic impact.',
          'Shield contact, Shield break, Hull damage and critical-Hull warnings have distinct audio cues. Important danger cues take priority over routine firing sounds.',
          'Reduced-motion presentation removes the new camera impulses while retaining attack flashes and essential combat cues.',
        ],
      },
    ],
    note:
      'This catches up on presentation work integrated through September 21. The current website captures show the in-engine build. Readability in busy fights and long-session Android performance still need player and device testing.',
  },
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
