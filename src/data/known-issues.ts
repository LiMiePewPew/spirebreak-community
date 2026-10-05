export type KnownIssue = {
  severity: 'high' | 'medium' | 'low';
  area: string;
  title: string;
  status: 'Investigating' | 'Testing' | 'Monitoring' | 'Known limitation';
  summary: string;
};

export const knownIssues: KnownIssue[] = [
  { severity: 'high', area: 'Android', title: 'Long Android sessions still need broader device testing', status: 'Known limitation', summary: 'Frame pacing, heat, battery use and interaction in full scenes still need broader testing across physical phones. Automated layout checks are not device certification.' },
  { severity: 'medium', area: 'Performance', title: 'First-use effect hitches remain a monitoring item', status: 'Monitoring', summary: 'First-use model/effect spikes persisted in the latest staged desktop measurements despite reduced draw calls. Please include the build, device and moment when reporting a hitch; normal full-run and physical-device performance remain under review.' },
  { severity: 'medium', area: 'Bosses and combat', title: 'Busy-fight readability still needs playtesting', status: 'Testing', summary: 'The quieter HUD, FOCUS targeting, calmer camera feedback and solid-body impact effects are integrated. Forge Tyrant interruption readability and the alignment of full-scene effects still need normal-speed review. The contact pass does not certify every hitbox or platform.' },
  { severity: 'medium', area: 'Replayability', title: 'Spire pressure, Contracts and front rewards need more playtesting', status: 'Testing', summary: 'Revised Spire HP/damage pressure, cumulative rules, World Contracts, optional Mutators and Swarm/Siege fronts need more full-run evidence together. Their integration does not prove that every legal build can win. Mutator runs intentionally do not unlock the next Spire level.' },
  { severity: 'low', area: 'Onboarding', title: 'New-player understanding still needs direct observation', status: 'Known limitation', summary: 'The illustrated guide, purchase panels and reward choices have received readability work. Long Market and Machine lists still scroll. Layout checks do not establish that a new player understands the effects, tradeoffs or next action.' },
  { severity: 'low', area: 'Balance', title: 'Saving, defense and damage still need combined testing', status: 'Known limitation', summary: 'Reserve bonuses, enemy pressure, defensive investments, Capacitor Lance timing and Mutation/Resonance combinations need feedback together. No strategy is presented as a proven balanced default.' }
];
