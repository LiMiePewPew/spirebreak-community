export type Lane = 'next' | 'later' | 'exploring';
export const statusUpdated = '2026-09-22';

export type RoadmapItem = {
  lane: Lane;
  title: string;
  area: string;
  summary: string;
};

export const roadmap: RoadmapItem[] = [
  {
    lane: 'next',
    title: 'Tune saving, spending and survival together',
    area: 'Balance',
    summary:
      'Use full-run feedback to tune the trade-off between saving Scrap, buying power and staying alive, so more than one strategy feels worth pursuing.',
  },
  {
    lane: 'next',
    title: 'Check boss warnings during busy fights',
    area: 'Bosses',
    summary:
      'Test whether boss warnings remain recognizable alongside weapon effects, motion and audio, then use those results to guide presentation changes.',
  },
  {
    lane: 'next',
    title: 'Make the first run easier to learn',
    area: 'Onboarding',
    summary:
      'Target priorities, Reserve, purchase outcomes, Shield and Armor should make sense while you play. Feedback will guide clearer explanations of existing choices before more systems are added.',
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
    title: 'Environments beyond the current three chapters',
    area: 'Content',
    summary:
      'Additional environments or longer journeys remain possibilities, not confirmed additions.',
  },
];

export const testing = [
  {
    title: 'Did a target priority answer a real threat?',
    question:
      'What made you choose Balanced, Intercept, Hunt or Break? Could you tell what changed, and did the command cooldown matter?',
  },
  {
    title: 'When did you give up your Reserve?',
    question:
      'Did you delay a purchase to save Scrap, then spend it on power or repair when the wave became dangerous? Was the lost payout clear before you committed?',
  },
  {
    title: 'Could you read the fight?',
    question:
      'Could you spot the dangerous approach, recognize a boss warning and distinguish Shield damage from Hull danger while your weapons were firing?',
  },
  {
    title: 'What machine would you build next?',
    question:
      'Which purchase, mutation or Resonance opportunity changed your plan? Did the machine look and sound different enough to make another build worth trying?',
  },
];
