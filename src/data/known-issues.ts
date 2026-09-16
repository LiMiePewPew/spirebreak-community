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
    area: 'Balance',
    title: 'Difficulty is provisional after the pacing and defense overhaul',
    status: 'Testing',
    summary:
      'Decision timing, spawn cadence and the defensive model changed substantially. Previous difficulty results are historical context, not acceptance evidence for the current development build.',
  },
  {
    severity: 'medium',
    area: 'Playtesting',
    title: 'Human pacing and replayability are not validated yet',
    status: 'Testing',
    summary:
      'Automated verification can prove deterministic behavior and regressions, but it cannot prove that the slower pace, build identity or defensive choices feel good to players.',
  },
  {
    severity: 'medium',
    area: 'Android',
    title: 'Physical Android performance is not yet certified',
    status: 'Investigating',
    summary:
      'Desktop profiling is substantially improved, but GPU cost, thermals and sustained frame pacing still need measurements on representative Android devices.',
  },
  {
    severity: 'medium',
    area: 'Performance',
    title: 'Cold first-use effects can still hitch',
    status: 'Investigating',
    summary:
      'The largest repeated stalls were reduced, while first-use model and shader work can still produce isolated spikes in diagnostic stress scenes.',
  },
];
