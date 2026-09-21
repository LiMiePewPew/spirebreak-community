export type Lane = 'now' | 'next' | 'later' | 'exploring';
export const statusUpdated = '2026-09-21';

export type RoadmapItem = {
  lane: Lane;
  title: string;
  area: string;
  summary: string;
};

export const roadmap: RoadmapItem[] = [
  {
    lane: 'now',
    title: 'Make every mutation feel like a transformation',
    area: 'Mutations',
    summary:
      'Tier III weapons can now change their attack rhythm, shape and role. Current playtests focus on whether each mutation is easy to notice and exciting enough to build around.',
  },
  {
    lane: 'now',
    title: 'Make powerful combinations possible to pursue',
    area: 'Resonance',
    summary:
      'After your first Tier III mutation, Resonance can point to one related Market card and one later Artifact choice. We are tuning how helpful that guidance feels without turning the run into a prescribed build.',
  },
  {
    lane: 'now',
    title: 'Keep full runs smooth on Android',
    area: 'Android',
    summary:
      'Desktop performance is currently stable. Long sessions on real Android phones still need more testing for frame pacing, heat, battery use and readability.',
  },
  {
    lane: 'next',
    title: 'Tune Resonance around real player choices',
    area: 'Buildcraft',
    summary:
      'The next tuning pass will use playtest runs to decide how often Resonance appears and whether its offers are worth the Scrap without becoming automatic purchases.',
  },
  {
    lane: 'next',
    title: 'Make the Forge Tyrant interrupt easier to read',
    area: 'Bosses',
    summary:
      'The boss can be interrupted while charging its barrage, but that opening may be too easy to miss. We are checking the warning, timing and feedback before changing the fight itself.',
  },
  {
    lane: 'next',
    title: 'Make the first run easier to learn',
    area: 'Onboarding',
    summary:
      'Starter weapons, Artifacts, threat previews, Shield and Armor should make sense while you play. Confusing choices will get clearer explanations before more systems are added.',
  },
  {
    lane: 'later',
    title: 'Give major build moments more impact',
    area: 'Presentation',
    summary:
      'Mutations, completed combinations and boss phases should sound and look as important as they are. Animation, audio and combat feedback will continue to improve.',
  },
  {
    lane: 'later',
    title: 'Add more reasons to try another build',
    area: 'Content',
    summary:
      'More Artifacts, mutation branches and encounter combinations can expand the game after playtests show where the current runs need more variety.',
  },
  {
    lane: 'exploring',
    title: 'Challenge runs',
    area: 'Replayability',
    summary:
      'Optional rules for experienced players could create stranger builds and tougher decisions without replacing the standard 30-wave run.',
  },
  {
    lane: 'exploring',
    title: 'More worlds',
    area: 'Content',
    summary:
      'New environments and larger journeys are possible later. The current 30-wave run comes first.',
  },
];

export const testing = [
  {
    title: 'Would you start another run?',
    question:
      'When a run ends, do you already have a different starter, mutation or combination you want to try?',
  },
  {
    title: 'Did your machine visibly change?',
    question:
      'Was there a moment when your tower stopped feeling like the early build and became something new?',
  },
  {
    title: 'Could you explain your build?',
    question:
      'Could you say what your machine did well, which enemies caused trouble and what you would change next time?',
  },
  {
    title: 'Did Resonance help without deciding for you?',
    question:
      'When a Resonance offer appeared, did you understand the connection and still feel that the final build was your choice?',
  },
];
