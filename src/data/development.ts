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
    title: 'Human replayability validation',
    area: 'Playtesting',
    summary:
      'The expanded arsenal, enemy roster, Artifacts, Discoveries and branching evolutions are engineering-verified. The next gate is whether players voluntarily begin another run to try a different machine.',
  },
  {
    lane: 'now',
    title: 'Economy after encounter restructuring',
    area: 'Balance',
    summary:
      'More deliberate waves can mean fewer enemy kills and therefore less kill-based Scrap. Fresh human run data will determine whether purchasing power actually needs calibration.',
  },
  {
    lane: 'now',
    title: 'Physical Android performance',
    area: 'Performance',
    summary:
      'Desktop engineering remains healthy, but real Android hardware is still required to validate sustained frame pacing, thermals, readability and battery behavior.',
  },
  {
    lane: 'next',
    title: 'Evidence-based balance calibration',
    area: 'Balance',
    summary:
      'Use human run data to tune boss fairness, Scrap flow, defense pressure and build viability without undoing the slower, more readable combat structure.',
  },
  {
    lane: 'next',
    title: 'Onboarding and first-run clarity',
    area: 'UX',
    summary:
      'If new players struggle to understand Starter Drafts, Artifacts, Threat Previews or defensive layers, improve explanation and presentation before adding more systems.',
  },
  {
    lane: 'later',
    title: 'Presentation and gamefeel polish',
    area: 'Polish',
    summary:
      'Refine animation, audio, impact feedback, boss presentation and visual hierarchy once the current loop has human validation behind it.',
  },
  {
    lane: 'later',
    title: 'Deeper horizontal content',
    area: 'Content',
    summary:
      'More Artifacts, evolution branches and encounter combinations should expand possibility only after playtests show where variety is genuinely running out.',
  },
  {
    lane: 'exploring',
    title: 'Challenge runs',
    area: 'Replayability',
    summary:
      'Optional run constraints for experienced players remain a possible mastery layer, but are not committed to the roadmap.',
  },
  {
    lane: 'exploring',
    title: 'Additional worlds',
    area: 'Content',
    summary:
      'New environments and world-scale content are intentionally deferred until the existing 30-wave structure proves strong replay pull.',
  },
];

export const testing = [
  {
    title: 'Voluntary replay',
    question:
      'After a run ends, do players choose to start Run 2 or Run 3 because they already have a different Starter, Artifact or evolution idea in mind?',
  },
  {
    title: 'Economy under the new encounters',
    question:
      'Do fewer, more structured enemies leave enough Scrap for meaningful purchases, rerolls and adaptation without making the Market feel starved?',
  },
  {
    title: 'Build and threat comprehension',
    question:
      'Can players explain what their machine was good at, which enemies caused problems, and what they would intentionally change next time?',
  },
  {
    title: 'Artifact and discovery pull',
    question:
      'Do Artifacts, Discoveries and branching evolutions create curiosity and memorable run identity without turning progression into grind?',
  },
];
