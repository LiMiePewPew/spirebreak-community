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
    title: 'We still need to prove that people naturally want another run',
    status: 'Testing',
    summary:
      'The current build has much more variety, including new weapons, enemies, Artifacts, Discoveries and branching evolutions. The open question is whether those systems create a real one-more-run feeling for players.',
  },
  {
    severity: 'high',
    area: 'Economy',
    title: 'The new encounter structure may have changed Scrap income',
    status: 'Testing',
    summary:
      'Waves now use fewer, more purposeful enemies. Because kills award Scrap, we need fresh full-run data to see whether players still get enough purchases and rerolls to shape a satisfying build.',
  },
  {
    severity: 'medium',
    area: 'Balance',
    title: 'Boss fairness is still being tested across different builds',
    status: 'Testing',
    summary:
      'The wider arsenal and new Artifact choices create more ways to build a machine. Bosses still need human testing to make sure those different approaches feel viable and understandable.',
  },
  {
    severity: 'medium',
    area: 'Android',
    title: 'Android performance still needs real-device testing',
    status: 'Investigating',
    summary:
      'Desktop profiling looks much healthier, but long-run frame pacing, heat, readability and battery use still need to be measured on representative Android phones.',
  },
  {
    severity: 'medium',
    area: 'Performance',
    title: 'Some effects can still hitch the first time they appear',
    status: 'Investigating',
    summary:
      'Repeated late-game stalls are much lower than before, but first-use model and shader work can still cause isolated spikes in stress tests.',
  },
];
