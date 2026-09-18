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
    title: 'Does the machine become memorable?',
    area: 'Playtesting',
    summary:
      'Mutation V1 gives high-tier weapons stronger changes to attack behavior, timing and geometry. We are now testing whether players can tell the story of what their tower became instead of remembering only bigger damage numbers.',
  },
  {
    lane: 'now',
    title: 'Do build interactions become something players chase?',
    area: 'Buildcraft',
    summary:
      'The new Catalyst interactions connect existing weapons, Artifacts and tower systems. Engineering is green, but we still need to learn whether players notice these combinations, understand them and actively want to build toward them.',
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
      'Catalyst access, Scrap flow, defense pressure and weapon choices will be adjusted from human run evidence instead of broad guesses or automated win rates alone.',
  },
  {
    lane: 'next',
    title: 'Make Forge Tyrant counterplay matter',
    area: 'Bosses',
    summary:
      'Forge Tyrant has a readable interrupt window, but automated runs almost never convert it into a true interrupt. Human sessions will tell us whether the problem is comprehension, timing or the encounter rule itself before we change it.',
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
      'After a run ends, do players voluntarily start another because they already have a different machine, mutation or interaction in mind?',
  },
  {
    title: 'A real transformation moment',
    question:
      'Can players point to a moment where the tower stopped feeling like the early build and became a noticeably different machine?',
  },
  {
    title: 'Can players explain their machine?',
    question:
      'After the run, can players say what their build was good at, which enemies caused problems and what they would change next time?',
  },
  {
    title: 'Do interactions create curiosity?',
    question:
      'Do mutations, Catalysts, Artifacts and Discoveries give players a concrete idea they want to chase in a future run without turning progression into a grind?',
  },
];
