export type GameMediaKind = 'image' | 'video';

export type GameMedia = {
  id: string;
  kind: GameMediaKind;
  src: string;
  width: number;
  height: number;
  aspectRatio: string;
  alt: string;
  caption: string;
  category: string;
  placements: string[];
  gameBuild: string;
  poster?: string;
  focus?: string;
};

export const gameMedia: GameMedia[] = [
  {
    id: 'gate-warden',
    kind: 'image',
    src: '/media/game/boss/gate-warden.webp',
    width: 300,
    height: 188,
    aspectRatio: '300 / 188',
    alt: 'Spirebreak tower fighting the Gate Warden during Wave 10 with several weapons active at close range.',
    caption: 'Gate Warden turns Wave 10 into the first major build check.',
    category: 'BOSS',
    placements: ['home.hero', 'home.gallery'],
    gameBuild: '428fa4cc34ef4418073ce311e645c813f367162f',
    focus: '50% 48%',
  },
  {
    id: 'artifact-choice',
    kind: 'image',
    src: '/media/game/artifacts/artifact-choice.webp',
    width: 960,
    height: 600,
    aspectRatio: '8 / 5',
    alt: 'Artifact reward screen offering Kinetic Feedback, Ablative Hull and Salvage Protocol after the Wave 10 boss.',
    caption: 'Boss rewards can redirect the rules of the run.',
    category: 'ARTIFACT',
    placements: ['home.gallery'],
    gameBuild: '428fa4cc34ef4418073ce311e645c813f367162f',
  },
  {
    id: 'build-paths',
    kind: 'image',
    src: '/media/game/builds/build-paths.webp',
    width: 300,
    height: 188,
    aspectRatio: '300 / 188',
    alt: 'Build Paths screen showing an Explosive Hull machine and specialization paths including Fortress, Economy and Artillery.',
    caption: 'Build paths make the direction of the machine visible while the run is still alive.',
    category: 'BUILD',
    placements: ['home.gallery'],
    gameBuild: '428fa4cc34ef4418073ce311e645c813f367162f',
  },
  {
    id: 'hall-of-machines',
    kind: 'image',
    src: '/media/game/builds/hall-of-machines.webp',
    width: 960,
    height: 600,
    aspectRatio: '8 / 5',
    alt: 'Hall of Machines showing a previous mixed Hull run, its weapon evolutions and the Kinetic Feedback Artifact.',
    caption: 'Every finished run leaves a machine behind.',
    category: 'HALL OF MACHINES',
    placements: ['home.gallery'],
    gameBuild: '428fa4cc34ef4418073ce311e645c813f367162f',
  },
];

export const mediaFor = (placement: string): GameMedia[] =>
  gameMedia.filter((asset) => asset.placements.includes(placement));

export const firstMediaFor = (placement: string): GameMedia | undefined =>
  mediaFor(placement)[0];
