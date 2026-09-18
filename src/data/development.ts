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
    title: 'Does Resonance create intentional builds?',
    area: 'Buildcraft',
    summary:
      'Catalyst Agency can now surface one relevant Market opportunity and one later eligible Artifact opportunity after a Tier III mutation comes online. The open question is whether players use that guidance to make deliberate tradeoffs rather than feeling that the run is being solved for them.',
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
    title: 'Tune Resonance from real choices',
    area: 'Balance',
    summary:
      'We will adjust how often and how strongly Resonance guides a build only after seeing whether players notice the opportunity, pay for it, complete the Catalyst and still feel ownership over the result.',
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
      'After a run ends, do players voluntarily start another because they already have a different mutation, Catalyst or machine plan in mind?',
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
    title: 'Does Resonance help without solving the run?',
    question:
      'When a Resonance opportunity appears, do players understand why it matters, deliberately choose whether to spend on it and still feel that the final machine was their own plan?',
  },
];
