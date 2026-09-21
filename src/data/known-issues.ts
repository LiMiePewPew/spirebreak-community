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
    title: 'Long Android runs can still lose smoothness',
    status: 'Investigating',
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
    title: 'Mutation and Resonance balance is still provisional',
    status: 'Known limitation',
    summary:
      'Some combinations may be too rare, too obvious or too strong while the current build gathers more full-run playtest feedback.',
  },
];
