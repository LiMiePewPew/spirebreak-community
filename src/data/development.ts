import { contentAsOf } from './release';
export type Lane = 'next' | 'later' | 'exploring';
export const statusUpdated = contentAsOf;
export type RoadmapItem = { lane: Lane; title: string; area: string; summary: string; };

export const roadmap: RoadmapItem[] = [
  { lane: 'next', title: 'Playtest the complete run, not isolated features', area: 'Balance', summary: 'Test saving and spending, defensive builds, World Contracts, boss answers and earned front rewards together. Establish full-run evidence for multiple builds rather than treating automated passes as win-rate or fun certification.' },
  { lane: 'next', title: 'Tune Spire pressure, Contracts and Mutators', area: 'Replayability', summary: 'Compare chapter Contracts alongside Swarm/Siege fronts, the revised run pressure, cumulative Spire rules and optional Mutator setups. Look for choices that feel automatic or unfair, including on retries and chapter transitions.' },
  { lane: 'next', title: 'Watch new players learn their first run', area: 'Onboarding', summary: 'Validate the illustrated guide, contextual hints, FOCUS targeting, purchase effects and Interest explanations with new players. Check the actual phone layout and make the next improvement from observed confusion.' },
  { lane: 'next', title: 'Check busy fights on real devices', area: 'Presentation', summary: 'Review the quieter combat screen, boss attacks, solid-body hit effects and long-session frame pacing. Desktop render improvements are measured; physical-phone performance, first-use hitches and heat still need direct testing.' },
  { lane: 'later', title: 'Qualify weekly ranked runs', area: 'Online', summary: 'Check human-played runs, full victories and timing across supported devices, then complete sign-in, run submission and result-status feedback before opening a public weekly leaderboard. No launch date is set.' },
  { lane: 'later', title: 'Expand builds and translate from a tested foundation', area: 'Content', summary: 'Use playtest findings to choose useful Artifact, mutation and encounter additions. The localization foundation is integrated; translated editions and their release dates are not announced.' },
  { lane: 'exploring', title: 'Environments beyond the current three chapters', area: 'Content', summary: 'Additional environments or longer journeys remain possibilities, not confirmed additions. The current run still consists of three chapters and 30 waves.' }
];

export const testing = [
  { title: 'Could you explain your first purchase?', question: 'Did the guide and hints make automatic combat, Scrap, Hull repair and Interest understandable? Which card effect or label still needed an explanation?' },
  { title: 'Did a target priority answer a real threat?', question: 'What made you choose BALANCED, INTERCEPT, HUNT or FOCUS? Could you see the difference, and did the six-second combat command cooldown matter?' },
  { title: 'When was saving no longer worth it?', question: 'Did protecting your Reserve delay a purchase, then force you to spend on power or repair? Was the lost bonus clear, and could your defensive plan survive?' },
  { title: 'Did the Contract change your build?', question: 'Which World Contract did you choose, and did its threat and +2 Scrap reward change your purchases? After Wave 10 or 20, how did it interact with the Swarm/Siege front over the following four waves?' },
  { title: 'Did the next Spire feel like a different challenge?', question: 'Could you name the new rule, understand the extra HP/damage pressure and find the cumulative rules again? With Mutators, was it clear that the run would not unlock the next Spire level?' },
  { title: 'Could you read the fight and want another build?', question: 'Were boss interruption windows, Shield versus Hull damage and projectile contacts readable with fewer combat overlays? Which weapon mutation, Artifact or Resonance link would you pursue next?' }
];
