export type KnownIssue = {
  severity: 'high' | 'medium' | 'low';
  area: string;
  title: string;
  status: 'Investigating' | 'Testing' | 'Monitoring' | 'Known limitation';
  summary: string;
};

export const knownIssues: KnownIssue[] = [
  {
    severity: 'high',
    area: 'Android',
    title: 'Long Android sessions still need broader device testing',
    status: 'Known limitation',
    summary:
      'Long sessions still need broader testing across Android phones. Frame pacing, heat and battery use may vary by device.',
  },
  {
    severity: 'medium',
    area: 'Performance',
    title: 'Some effects can hitch the first time they appear',
    status: 'Investigating',
    summary:
      'A model or visual effect may cause a brief pause the first time it appears in a run, especially during dense late-game encounters.',
  },
  {
    severity: 'medium',
    area: 'Bosses',
    title: 'The Forge Tyrant interrupt can be hard to recognize',
    status: 'Testing',
    summary:
      'The Forge Tyrant can be interrupted while charging its barrage, but the warning and progress may not yet be clear enough during a busy fight.',
  },
  {
    severity: 'low',
    area: 'Balance',
    title: 'Reserve, enemy pressure and build balance are still provisional',
    status: 'Known limitation',
    summary:
      'Reserve payouts, target priorities, tougher ordinary enemies and Mutation/Resonance combinations need more full-run feedback together. No single strategy has been established as a balanced default.',
  },
];
