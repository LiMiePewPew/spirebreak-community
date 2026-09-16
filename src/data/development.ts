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
    title: 'Human pacing & replayability tests',
    area: 'Playtesting',
    summary:
      'The new pacing, Shield/Armor defense and build-identity systems are engineering-verified. Normal-speed human sessions now need to prove that they are clear, fun and worth replaying.',
  },
  {
    lane: 'now',
    title: 'Balance after the pacing overhaul',
    area: 'Balance',
    summary:
      'Difficulty is provisional after large changes to decision time, spawn cadence and defense. Fresh evidence is required before the current curve is treated as stable.',
  },
  {
    lane: 'now',
    title: 'Physical Android performance',
    area: 'Performance',
    summary:
      'Desktop frame-time engineering is substantially improved. Real Android hardware remains the next acceptance gate for sustained performance, thermals and readability.',
  },
  {
    lane: 'next',
    title: 'Threat counterplay & combat depth',
    area: 'Combat',
    summary:
      'Make enemy and boss pressure more legible and strategically distinct so builds answer different threats instead of simply racing a wall of hit points.',
  },
  {
    lane: 'next',
    title: 'Upgrade quality cleanup',
    area: 'Buildcraft',
    summary:
      'Audit remaining low-impact timing and stat upgrades so purchases create understandable power spikes instead of small filler decisions.',
  },
  {
    lane: 'later',
    title: 'Physical-device quality pass',
    area: 'Mobile',
    summary:
      'Validate touch targets, thermals, frame pacing, readability and battery behavior across representative Android hardware.',
  },
  {
    lane: 'later',
    title: 'Broader content variety',
    area: 'Content',
    summary:
      'Add more encounter and build variety only after the current core loop proves that existing systems create memorable, replayable runs.',
  },
  {
    lane: 'exploring',
    title: 'More experimental weapons',
    area: 'Arsenal',
    summary:
      'Additional prototypes should introduce new combat geometry and build questions, not just larger damage numbers.',
  },
  {
    lane: 'exploring',
    title: 'Challenge runs',
    area: 'Replayability',
    summary:
      'Optional run constraints for experienced players are being considered, but are not committed to the roadmap.',
  },
];

export const testing = [
  {
    title: 'Human pace',
    question:
      'Can players read offers, watch their machine work and prepare for threats without feeling rushed or sitting through dead time?',
  },
  {
    title: 'Defensive choice',
    question:
      'Do Shield, Armor and emergency Repair create understandable tradeoffs instead of collapsing back into repeated healing?',
  },
  {
    title: 'One-more-run pull',
    question:
      'Can players describe the build they created and voluntarily start another run to try a different direction?',
  },
];
