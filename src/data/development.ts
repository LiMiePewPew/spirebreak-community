import { contentAsOf } from './release';
export type Lane = 'next' | 'later' | 'exploring';
export const statusUpdated = contentAsOf;
export type RoadmapItem = { lane: Lane; title: string; area: string; summary: string; };

export const roadmap: RoadmapItem[] = [
  { lane: 'next', title: 'Playtest the complete run, not isolated features', area: 'Balance', summary: 'Test saving and spending, defensive builds, boss answers and earned front rewards together. Establish full-run evidence for multiple builds rather than treating automated passes as win-rate or fun certification.' },
  { lane: 'next', title: 'Tune Spire levels, Mutators and front choices', area: 'Replayability', summary: 'Compare all four Swarm/Siege front combinations, cumulative Spire rules and optional Mutator setups. Look for choices that feel automatic or unfair, including on retries and chapter transitions.' },
  { lane: 'next', title: 'Watch new players learn their first run', area: 'Onboarding', summary: 'Validate the illustrated guide, contextual hints, FOCUS targeting, purchase effects and Interest explanations with new players. Check the actual phone layout and make the next improvement from observed confusion.' },
  { lane: 'next', title: 'Check busy fights on real devices', area: 'Presentation', summary: 'Review boss warnings, calmer camera feedback, solid-body hit effects and long-session frame pacing. Capture fresh full-game footage after the combined UI and combat presentation have been reviewed.' },
  { lane: 'later', title: 'Qualify weekly ranked runs', area: 'Online', summary: 'Check human-played runs, full victories and timing across supported devices, then complete sign-in, run submission and result-status feedback before opening a public weekly leaderboard. No launch date is set.' },
  { lane: 'later', title: 'Expand builds and translate from a tested foundation', area: 'Content', summary: 'Use playtest findings to choose useful Artifact, mutation and encounter additions. The localization foundation is integrated; translated editions and their release dates are not announced.' },
  { lane: 'exploring', title: 'Environments beyond the current three chapters', area: 'Content', summary: 'Additional environments or longer journeys remain possibilities, not confirmed additions. The current run still consists of three chapters and 30 waves.' }
];

export const testing = [
  { title: 'Could you explain your first purchase?', question: 'Did the guide and hints make automatic combat, Scrap, Hull repair and Interest understandable? Which card effect or label still needed an explanation?' },
  { title: 'Did a target priority answer a real threat?', question: 'What made you choose BALANCED, INTERCEPT, HUNT or FOCUS? Could you see the difference, and did the six-second combat command cooldown matter?' },
  { title: 'When was saving no longer worth it?', question: 'Did protecting your Reserve delay a purchase, then force you to spend on power or repair? Was the lost bonus clear, and could your defensive plan survive?' },
  { title: 'Why did you choose that front?', question: 'After Wave 10 or 20, did the Swarm/Siege pressure and earned reward change your decision? Did the following four waves match the forecast, and was the reward clear?' },
  { title: 'Did the next Spire feel like a different challenge?', question: 'Could you name the new rule and find the cumulative rules again? With Mutators, was it clear that the run would not unlock the next Spire level?' },
  { title: 'Could you read the fight and want another build?', question: 'Were boss interruption windows, Shield versus Hull damage and projectile contacts readable with the calmer camera? Which weapon mutation, Artifact or Resonance link would you pursue next?' }
];
