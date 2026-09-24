export type KnownIssue = {
  severity: 'high' | 'medium' | 'low';
  area: string;
  title: string;
  status: 'Investigating' | 'Testing' | 'Monitoring' | 'Known limitation';
  summary: string;
};

export const knownIssues: KnownIssue[] = [
  { severity: 'high', area: 'Android', title: 'Long Android sessions still need broader device testing', status: 'Known limitation', summary: 'Frame pacing, heat, battery use and interaction in full scenes still need broader testing across physical phones. Automated layout checks are not device certification.' },
  { severity: 'medium', area: 'Performance', title: 'First-use effect hitches remain a monitoring item', status: 'Monitoring', summary: 'Earlier development builds could briefly pause when an effect or model first appeared. This refresh does not establish that the issue is fixed; please include the build, device and moment when reporting a hitch.' },
  { severity: 'medium', area: 'Bosses and combat', title: 'Busy-fight readability still needs playtesting', status: 'Testing', summary: 'Boss warnings, FOCUS targeting, calmer camera feedback and solid-body impact effects are integrated. Forge Tyrant interruption readability and the alignment of full-scene effects still need normal-speed review. The contact pass does not certify every hitbox or platform.' },
  { severity: 'medium', area: 'Replayability', title: 'Higher Spires, Mutators and front rewards are provisional', status: 'Testing', summary: 'Cumulative Spire rules, optional Mutators and all four Swarm/Siege front combinations need more full-run evidence. Their integration does not prove that every legal build can win. Mutator runs intentionally do not unlock the next Spire level.' },
  { severity: 'low', area: 'Onboarding', title: 'The new guide is not a complete interface redesign', status: 'Known limitation', summary: 'The five illustrated basics are scroll-free. Some existing Market and Machine surfaces still use their own navigation or scrolling. New-player understanding and complete phone layouts remain open test questions.' },
  { severity: 'low', area: 'Balance', title: 'Saving, defense and damage still need combined testing', status: 'Known limitation', summary: 'Reserve bonuses, enemy pressure, defensive investments, Capacitor Lance timing and Mutation/Resonance combinations need feedback together. No strategy is presented as a proven balanced default.' }
];
