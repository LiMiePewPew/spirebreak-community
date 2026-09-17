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
    area: 'Playtesting',
    title: 'Replayability is engineering-ready but not human-validated',
    status: 'Testing',
    summary:
      'The current build now includes a wider arsenal, new enemy roles, Artifacts, Discoveries, branching evolutions and run history. Automated tests cannot prove that these systems create a genuine voluntary one-more-run response.',
  },
  {
    severity: 'high',
    area: 'Economy',
    title: 'Scrap flow may have shifted after the encounter overhaul',
    status: 'Testing',
    summary:
      'More deliberate formations use fewer enemies than older density-heavy waves. Because kills contribute Scrap, purchasing power and reroll freedom need fresh full-run evidence before the economy is considered stable.',
  },
  {
    severity: 'medium',
    area: 'Balance',
    title: 'Boss and build fairness remain provisional',
    status: 'Testing',
    summary:
      'New enemy roles, Artifact rewards and evolution branches changed the space of viable builds. Boss pressure and defense demands still need normal-speed human validation across different machines.',
  },
  {
    severity: 'medium',
    area: 'Android',
    title: 'Physical Android performance is not yet certified',
    status: 'Investigating',
    summary:
      'Desktop profiling and automated checks are healthy, but GPU cost, thermals, sustained frame pacing and readability still need measurements on representative Android devices.',
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
