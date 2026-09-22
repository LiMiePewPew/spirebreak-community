export type Lane = 'now' | 'next' | 'later' | 'exploring';
export const statusUpdated = '2026-09-22';

export type RoadmapItem = {
  lane: Lane;
  title: string;
  area: string;
  summary: string;
};

export const roadmap: RoadmapItem[] = [
  {
    lane: 'now',
    title: 'Set the machine\'s target priorities',
    area: 'Targeting',
    summary:
      'Balanced, Intercept, Hunt and Break are in the development build. We need to see whether switching priorities helps players answer a visible threat without turning automatic combat into constant micromanagement.',
  },
  {
    lane: 'now',
    title: 'Choose between Reserve and immediate power',
    area: 'Economy',
    summary:
      'Holding Scrap through a non-final wave can earn a small Reserve payout. Spending remains available, with previews showing the reward you may give up. The key question is whether saving and cashing out both feel worthwhile.',
  },
  {
    lane: 'now',
    title: 'Answer attacks from different directions',
    area: 'Combat',
    summary:
      'Waves now form distinct fronts, breaches, surrounds and ranged pressure. Selected melee enemies can close from nearer lanes after the opening waves. We are checking whether those threats are readable and defense feels useful.',
  },
  {
    lane: 'now',
    title: 'See and hear the machine develop',
    area: 'Presentation',
    summary:
      'Foundation, Fortified and Ascendant silhouettes, three chapter atmospheres, weapon recoil and distinct combat audio are already implemented. Busy-fight readability, warning clarity and phone-scale presentation still need feedback.',
  },
  {
    lane: 'now',
    title: 'Build around mutations and Resonance',
    area: 'Buildcraft',
    summary:
      'Tier III mutations change weapon behavior, while Resonance can point toward a related Market or Artifact opportunity. We still need to learn whether those combinations are clear, tempting and worth pursuing across full runs.',
  },
  {
    lane: 'now',
    title: 'Keep full runs smooth on Android',
    area: 'Android',
    summary:
      'Long sessions on real Android phones still need broader testing for frame pacing, heat, battery use and readability, especially with the latest combat and presentation changes.',
  },
  {
    lane: 'next',
    title: 'Tune saving, spending and survival together',
    area: 'Balance',
    summary:
      'Use full-run feedback to assess Reserve, defensive purchases, enemy durability and Resonance opportunities together. The goal is meaningful alternatives, not one correct economy or targeting strategy.',
  },
  {
    lane: 'next',
    title: 'Check boss warnings during busy fights',
    area: 'Bosses',
    summary:
      'The Forge Tyrant interrupt remains a readability question. Its warning and feedback need to stay recognizable alongside the new motion and audio before further fight changes are treated as the answer.',
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
      'The current run already has three distinct chapter atmospheres. Additional environments or longer journeys remain possibilities, not confirmed additions.',
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
