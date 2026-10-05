import { changelog as archive, type ChangeEntry } from './changelog';

export type UpdateImage = { src: string; width: number; height: number; alt: string; caption: string; crop?: { x: number; y: number; width: number; height: number; minWidth: number }; scrollHint?: string };
export type Update = Omit<ChangeEntry, 'sections'> & {
  hero?: UpdateImage;
  lead?: string;
  sections: Array<ChangeEntry['sections'][number] & { paragraphs?: string[]; image?: UpdateImage }>;
};
const screenshots = '/media/updates/2026-10-05';

// Published entries in changelog.ts remain unchanged. All page consumers use this feed.
export const currentUpdates: Update[] = [
  {
    slug: 'development-update-13',
    kicker: 'Game Update #13',
    date: '2026-10-05',
    title: 'A new arena. More meaningful decisions.',
    summary: 'An orbital battlefield, a Contract for every chapter, clearer build choices and a quieter combat screen. Here is the big catch-up on what has changed in Spirebreak since September 24 — with new screenshots from the development build.',
    lead: 'A new orbital arena. World Contracts for every chapter. Clearer choices for the machine you build.',
    hero: {
      src: '/media/showcase/orbital-2026-10-04/combat-1920.webp', width: 1920, height: 982,
      alt: 'The Sentinel and Gate Warden on the orbital station, with broken bridges and a planet beyond the arena.',
      caption: 'The orbital arena in a staged Wave 10 encounter. In-engine capture from October 4, 2026; interface hidden.'
    },
    sections: [
      {
        heading: 'The battlefield has a new home',
        paragraphs: [
          'The Sentinel now stands on a planetary orbital station: a circular platform, interrupted walkways, a broken outer ring and a distant planet hanging behind the fight. The open space around the arena gives the machine a stronger silhouette and makes the battlefield feel suspended above something much larger.',
          'Lighting, shadows and the planetary backdrop have received further attention, too. The aim is to give the arena depth while keeping enemies and weapon effects easy to pick out. Your Tower still stays put; the camera lets you inspect the machine without turning movement into a new combat mechanic.',
          'This is a new presentation of the existing three-chapter, 30-wave run. There is still one build to assemble and three bosses to survive.'
        ], items: []
      },
      {
        heading: 'Choose the pressure for each chapter',
        paragraphs: [
          'World Contracts add a decision before Waves 1, 11 and 21. Choose one of three offered Contracts for the coming ten-wave chapter. Each card explains the threat, suggests ways your build might answer it and shows the reward: +2 Scrap for each cleared wave in that chapter, except Wave 30.',
          'The six Contracts ask different things of a machine. A build comfortable with crowds may welcome Swarm Tide. A close-defense build might prefer Breach Protocol. Blood Money makes repairs 50% more expensive, giving prevention and a healthy Scrap reserve a different kind of value.'
        ],
        items: [
          'Swarm Tide adds light-enemy pressure; Iron Procession turns selected light groups into heavier threats.',
          'Siege Protocol brings more ranged enemies and support; Encirclement sends some groups from the opposite side.',
          'Breach Protocol starts melee pressure closer; Blood Money raises repair costs.',
          'A Contract applies to its chapter. The existing Swarm/Siege front choice after Waves 10 and 20 still affects the next four waves and has its own earned reward.'
        ],
        image: { src: `${screenshots}/contracts.webp`, width: 1920, height: 1080,
          crop: { x: 420, y: 366, width: 1080, height: 340, minWidth: 780 }, scrollHint: 'Scroll to compare the choices.',
          alt: 'World 1 Contract choices: Breach Protocol, Encirclement and Swarm Tide, each showing its threat, payoff and suggested response.',
          caption: 'Three actual Contract offers from a staged opening. Captured October 5, 2026. The run waits while you choose.' }
      },
      {
        heading: 'Make the choice easier to read',
        paragraphs: [
          'The menus and in-run panels now share a more consistent visual language: slate surfaces, clearer headings and distinct primary actions. Weapon categories sit beneath their names, upgrade identities are more explicit, and desktop tooltips give supporting detail without asking you to leave the decision.',
          'Artifacts and Unstable Cores also have their own artwork. The existing 16 Artifacts and four Cores are easier to tell apart, with gain, tradeoff and affected systems presented together. The artwork identifies the choices you already had; it does not introduce a new set of rewards.',
          'Small-window work covers purchase details, reward choices, setup screens and the Market header. Long lists can still scroll, while essential actions and purchase targets have received stability checks. The next test is whether a new player can explain a purchase before spending their Scrap.'
        ], items: [],
        image: { src: `${screenshots}/artifacts.webp`, width: 1920, height: 1080,
          crop: { x: 475, y: 310, width: 970, height: 475, minWidth: 720 }, scrollHint: 'Scroll to compare the choices.',
          alt: 'Artifact cards for Ablative Hull, Emergency Grid and Salvage Protocol with distinct icons and separate gain and tradeoff descriptions.',
          caption: 'The real Artifact selection panel, staged to compare three rewards. Captured October 5, 2026; this image is not evidence of a completed boss fight.' }
      },
      {
        heading: 'Let the fight breathe',
        paragraphs: [
          'The combat screen has become quieter. Spawn-direction overlays and extra enemy-threat text have been removed, so there is less competing with the arena, enemy silhouettes and attacks. Boss health, attack information and interruption feedback remain part of the encounter.',
          'That changes some of the presentation described in our September update. More labels were not always making the fight easier to follow. We want you to notice the threat itself, then understand whether your current build can answer it.',
          'We have also reduced the rendering work for common Swarm and Brute models while preserving their visible parts and animation. In five staged desktop workloads, draw calls fell by roughly 23–44%. That is a measured reduction in rendering work, not a claim of the same percentage gain in frame rate. First-use hitches and physical-phone testing remain open work.'
        ], items: []
      },
      {
        heading: 'Pressure before the finale',
        paragraphs: [
          'The latest balance pass redistributes enemy health and damage pressure across the run, with the aim of asking more of a build before the final wave. Forge Tyrant has also been adjusted as part of that curve. Weapons, defense, repairs and saving still have to work together; reaching Wave 30 should not be the first meaningful test of the machine.',
          'Higher Spires now add enemy HP and damage alongside their cumulative tactical rules. This extra pressure begins after Wave 1 and reaches its full strength at Wave 10. Spire 0 keeps its baseline, and the selected Spire is still fixed for the run.',
          'Automated comparisons help us find bottlenecks and check that changes do what they say. They do not establish a human win rate or prove that every build is fair. Wave 20, later-wave recovery and the interaction between Contracts, fronts and Mutators remain useful playtest targets.'
        ], items: []
      },
      {
        heading: 'Weekly practice is in the build. Ranked is still closed.',
        paragraphs: [
          'The Weekly Challenge practice screen and replay-verification foundation have now been integrated into the main development build. Our older preview described them as separate development-branch work; that integration status has changed.',
          'Practice gives the challenge a common setup and keeps its results separate from your normal collection and Spire progression. The screen explicitly identifies these as unranked practice results. Your practice run is not uploaded to a public board.',
          'Public ranking and player run submissions remain disabled. Human-played victories, timing across devices, and the sign-in, submission and result-status flow still need qualification before a public ranked launch.'
        ], items: [],
        image: { src: `${screenshots}/weekly.webp`, width: 1920, height: 1080,
          crop: { x: 564, y: 314, width: 792, height: 454, minWidth: 520 }, scrollHint: 'Scroll to read the practice panel.',
          alt: 'The Weekly Challenge screen explicitly marked Practice only, with a Play Practice action and no submitted results.',
          caption: 'The integrated practice screen, captured October 5, 2026. This is a development preview, not a live public leaderboard.' }
      },
      {
        heading: 'What we want to learn next',
        paragraphs: ['The next useful feedback comes from whole runs: the decisions that made sense, the moment they stopped working and the information you needed but could not find.'],
        items: [
          'Which Contract made you change your purchases, rather than simply taking the least worrying card?',
          'Could you explain the gain and tradeoff of your Core or Artifact before choosing it?',
          'Did the quieter combat screen help you follow enemies, boss attacks and interruption windows?',
          'Where did the run become difficult, and did you have a useful way to respond?',
          'On a phone-sized display, could you read the details and reliably hit the action you intended?'
        ]
      }
    ],
    note: 'Development catch-up published October 5, 2026, covering integrated work since September 24. Screenshots are genuine in-engine renders of staged development states, not one continuous player run. This is not a public release announcement, a human balance verdict or a performance guarantee for every device.'
  },
  {
    slug: 'development-update-12',
    kicker: 'Game Update #12',
    date: '2026-09-24',
    title: 'Read the threat. Feel the hit. Keep the camera calm.',
    summary: 'Bosses ask different questions of your build, waves have clearer pressure and recovery beats, and attacks are easier to follow without constant camera movement.',
    sections: [
      { heading: 'Three bosses, three kinds of answer', items: [
        'Gate Warden at Wave 10 tests focused damage during its charged attack. The briefing now makes that interruption opportunity explicit.',
        'Forge Tyrant at Wave 20 asks for reach or a defense that can survive its opening barrage. It stages farther out, but short-range builds can still fight it after its finite barrage and advance.',
        'Fractured Crown at Wave 30 asks you to handle groups and change priorities. Its second successful reinforcement call mixes a Fragmenter with Swarms instead of repeating the first group.',
        'These are soft build checks, not weapon requirements or immunity gates. Bosses remain damageable; no particular weapon family is required.'
      ] },
      { heading: 'Pressure needs room to breathe', items: [
        'The timing of encounter groups from Waves 7 to 30 now creates more distinct bursts, recovery pockets and accelerating finishes. Boss openings also get clearer moments to read.',
        'This pacing pass rearranges existing group gaps rather than increasing enemy counts, rewards or stats. The total timing budget is preserved.',
        'Preparation forecasts show the actual next wave\'s approach lanes and a small number of threat roles. During combat, up to three prioritized attack warnings help you notice dangerous windups, including threats outside the camera view.'
      ] },
      { heading: 'Stronger impacts, less camera movement', items: [
        'Routine Autocannon, Scatter, Spikes, Arc, Pulse and Beam attacks no longer request camera impulses. Heavy Cannon, Rail Lance and Mortar retain shorter, gentler accents; major boss moments remain distinct.',
        'Brief, bounded presentation pauses emphasize selected critical, vulnerable and finishing hits without stopping the authoritative game simulation. Reduced Motion keeps this presentation quieter.',
        'Confirmed projectile hits now meet selected solid parts of enemy models more consistently, including Siege Walker, Bulwark Carrier, Fragmenter and Relay Unit. Decorative parts and empty spaces between body parts are not treated as solid visual targets.',
        'This is a visual-contact improvement, not larger gameplay hitboxes. Weapon range, damage rules and area-damage centers are unchanged.'
      ] },
      { heading: 'The Capacitor Lance should look like it fired', items: [
        'The Lance now shows a growing charge, muzzle discharge, fork recoil and a short afterglow. Independent copies retain their own attack feedback.',
        'All Lance tiers now charge in 1.4 seconds. Its damage values, prices and high-health targeting were not changed by this pass.',
        'Artillery and energy builds also have more distinct high-tier silhouettes, and the opening Bastion chapter has clearer approach forecasts and environmental shapes.'
      ] }
    ],
    note: 'Catch-up on changes integrated into the main development build from September 22 to 24. Automated checks and staged captures do not establish human fairness, full-run build viability or performance on every device. The website footage was captured on September 22 and does not demonstrate every change described here.'
  },
  {
    slug: 'development-update-11',
    kicker: 'Game Update #11',
    date: '2026-09-24',
    title: 'Your first run should teach you while you play.',
    summary: 'Illustrated basics, contextual hints and clearer purchase effects help explain the choices already in Spirebreak. Higher Spire levels now show what actually changes, too.',
    sections: [
      { heading: 'Five illustrated basics, without a scrolling lesson', items: [
        'How to Play introduces automatic combat, buying with Scrap, Hull and repairs, Interest, and the 30-wave goal in five illustrated explanations. More Details keeps the advanced explanations available.',
        'Three dismissible hints introduce automatic combat, purchases and Interest during play. They yield to boss warnings, low-Hull feedback, choices and the Spire briefing instead of competing for attention.',
        'These hints do not spend resources, pause combat or change the camera. Dismissals last for the current application session.',
        'The supplied Spirebreak logo replaces the placeholder in the game\'s main menu while keeping PLAY prominent. This is the game-menu asset, not an announcement of a finished app icon.'
      ] },
      { heading: 'See the effect before the supporting labels', items: [
        'Purchase cards put the complete canonical effect directly below the name and price. Essential purchase text is no longer shortened with an ellipsis.',
        'The contextual run interface hides unavailable or irrelevant actions, including repairs at full Hull. Targeting stays in Machine rather than covering purchase cards.',
        'The illustrated guide is scroll-free; this does not mean every existing Market or Machine surface has been redesigned or made scroll-free.'
      ] },
      { heading: 'The same words wherever you need them', items: [
        'Hull names the Tower\'s health. Shield absorbs damage before Hull, while Armor reduces damage that reaches Hull. Repairs restore Hull, not Shield.',
        'The targeting priority previously displayed as BREAK is now FOCUS. Boss interruption progress is labeled INTERRUPT. These label changes do not add a new attack command.',
        'Artifact explanations separate what you gain, the tradeoff and what is affected. Mutation and Catalyst descriptions explain the interaction before relying on system names.',
        'An English source-copy and translation-key foundation is integrated. It prepares future localization; it is not a claim that translated editions are available.'
      ] },
      { heading: 'Know what the next Spire adds', items: [
        'The run HUD now has a dedicated Spire badge. The unlock result shows the next level, its concrete new rule and how many earlier rules remain active.',
        'The first Preparation at a Spire level in an application session shows a nonblocking reminder. Retries in that same session do not repeat it.',
        'Click, tap or focus the badge to open a paused rule reader. It shows one cumulative rule at a time instead of a long scrolling list.',
        'Progression rules remain unchanged. These are explanations of the existing Spire 1–20 ladder, not extra difficulty or permanent power.'
      ] }
    ],
    note: 'Integrated development changes, not a public release announcement. Small-layout component checks have passed, but full-scene readability, physical-device interaction and whether new players understand the choices still require playtesting.'
  },
  {
    slug: 'development-update-10',
    kicker: 'Game Update #10',
    date: '2026-09-24',
    title: 'Choose your next front. Find a reason for the next run.',
    summary: 'Spire 1–20 adds a challenge ladder after your first victory. Optional Mutators change the rules, and new front choices after Waves 10 and 20 let you weigh a different kind of pressure against its reward.',
    sections: [
      { heading: 'Victory opens Spire 1', items: [
        'Win the base 30-wave run to unlock Spire 1. Each eligible victory opens the next step, up to Spire 20, and lower unlocked levels remain replayable.',
        'Each level adds one authored rule, with earlier rules staying active. Changes include ammunition, support reach, escorts, charges, splitting, summons, boss patterns and repeated spending.',
        'This is not a blanket health-and-damage multiplier. The selected level is fixed for the run and recorded with the result; progress is saved locally.',
        'These difficulty levels are separate from the Foundation, Fortified and Ascendant chassis silhouettes shown on the home page. A bigger-looking machine is not an extra Spire level.'
      ] },
      { heading: 'Combine up to three optional Mutators', items: [
        'After your first victory, Run Setup lets you choose up to three Mutators alongside an unlocked Spire level, or roll a seeded random selection.',
        'Narrow Market removes one regular Market slot in exchange for cheaper paid rerolls. Blitz Assault makes ordinary enemies faster and increases their Scrap rewards, with exceptions for bosses and other special units.',
        'Siege substitutes additional ranged pressure into normal waves. Resonance Fever adds bounded build-link opportunities after your first Tier III mutation.',
        'Mutator runs keep their victories and machine records, but they do not unlock the next Spire level. Mutators change a run\'s rules; weapon mutations change weapon behavior.'
      ] },
      { heading: 'Choose the next front after a boss', items: [
        'After Waves 10 and 20, choose between Swarm and Siege pressure for the next four waves: Waves 11–14 or 21–24.',
        'The choice presents the pressure and its Scrap or Hull-repair reward. Clear the four consecutive waves to earn the reward; choosing a front does not grant it immediately.',
        'The decision pauses both the world and Market time and preserves the existing Artifact-choice order. The selected front appears in forecasts, the guide and the run recap.',
        'These are two encounter decisions inside the existing three-chapter run, not extra worlds, a map-navigation system or the separate optional Siege Mutator.'
      ] },
      { heading: 'Your build still has to survive the choice', items: [
        'Independent weapons, Tier III mutations, Artifacts and Resonance remain the tools for shaping a machine. A front choice changes what that machine will face rather than handing it a finished build.',
        'Front rewards, Mutator combinations and the cumulative Spire rules are provisional. More options do not prove that every combination is equally viable.',
        'Weekly ranked challenges remain a separate development preview. Public ranking and player run submissions remain disabled.'
      ] }
    ],
    note: 'Spire Ascension and Mutators were integrated on September 22; encounter-front choices were integrated on September 24. This article catches up on the main development build. Normal-speed playtests are still needed across all four front combinations, higher Spires and supported devices.'
  }
];

export const changelog: Update[] = [...currentUpdates, ...archive];
