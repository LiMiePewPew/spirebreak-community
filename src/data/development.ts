export type Lane = 'now' | 'next' | 'later' | 'exploring';

export type RoadmapItem = {
  lane: Lane;
  title: string;
  area: string;
  summary: string;
};

export const roadmap: RoadmapItem[] = [
  {
    lane: 'now',
    title: 'Do players want one more run?',
    area: 'Playtesting',
    summary:
      'We have added more weapons, enemy roles, Artifacts, Discoveries and evolution paths. Now we need to see whether players naturally start another run because they already have a new machine in mind.',
  },
  {
    lane: 'now',
    title: 'Does the new economy still feel generous enough?',
    area: 'Balance',
    summary:
      'Waves now use fewer but more purposeful enemies. That may reduce kill Scrap, so we are checking whether players still get enough meaningful purchases and rerolls across a full run.',
  },
  {
    lane: 'now',
    title: 'Make sure the game holds up on Android',
    area: 'Performance',
    summary:
      'Desktop performance is in a much healthier place. Real Android hardware still needs to prove that long runs stay smooth, readable and thermally reasonable.',
  },
  {
    lane: 'next',
    title: 'Tune what real players actually struggle with',
    area: 'Balance',
    summary:
      'Bosses, Scrap flow, defense pressure and weapon choices will be adjusted from human run evidence instead of broad guesses or automated win rates alone.',
  },
  {
    lane: 'next',
    title: 'Make the first run easier to understand',
    area: 'UX',
    summary:
      'If Starter choices, Artifacts, Threat Previews or Shield and Armor are confusing to new players, we will improve how the game teaches them before adding more systems.',
  },
  {
    lane: 'later',
    title: 'Push presentation and gamefeel further',
    area: 'Polish',
    summary:
      'Animation, audio, impact feedback, boss presentation and visual hierarchy can go much further once the current loop has been validated by players.',
  },
  {
    lane: 'later',
    title: 'Add more run-defining possibilities',
    area: 'Content',
    summary:
      'More Artifacts, evolution branches and encounter combinations should expand the game where players actually ask for more variety, not just inflate the content count.',
  },
  {
    lane: 'exploring',
    title: 'Challenge runs',
    area: 'Replayability',
    summary:
      'Optional rule sets for experienced players could add mastery and strange new builds without replacing the normal run.',
  },
  {
    lane: 'exploring',
    title: 'More worlds',
    area: 'Content',
    summary:
      'New environments and larger world-scale content are possible later. First, the current 30-wave structure has to earn repeated runs on its own.',
  },
];

export const testing = [
  {
    title: 'One more run',
    question:
      'After a run ends, do players voluntarily start another because they already want to try a different Starter, Artifact or evolution path?',
  },
  {
    title: 'Enough Scrap to build something interesting',
    question:
      'Do the more deliberate enemy waves still leave enough Scrap for purchases, rerolls and mid-run adaptation?',
  },
  {
    title: 'Can players explain their machine?',
    question:
      'After the run, can players say what their build was good at, which enemies caused problems and what they would change next time?',
  },
  {
    title: 'Do discoveries create curiosity?',
    question:
      'Do Artifacts, Discoveries and branching evolutions make players curious about future runs without turning progression into a grind?',
  },
];
