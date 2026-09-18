// Generated from explicitly reviewed media. Do not edit by hand.
export interface Variant { src: string; width: number; height: number; bytes: number }
interface MediaBase {
  id: string; src: string; width: number; height: number; aspectRatio: string;
  alt: string; caption: string; category: string; gameBuild: string; focus: string;
}
export interface ImageMedia extends MediaBase {
  kind: 'image'; webp: Variant[]; avif: Variant[];
}
export interface VideoMedia extends MediaBase {
  kind: 'video'; poster: string; mp4?: string;
}
export type GameMedia = ImageMedia | VideoMedia;

export const media: GameMedia[] = [
  {
    "id": "hero-combat",
    "kind": "image",
    "alt": "A tower with multiple weapon mounts and a cyan pulse ring faces the Gatewarden on a suspended arena.",
    "caption": "Build your answer to the next boss.",
    "category": "hero",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/hero/hero-combat-840.webp",
    "width": 840,
    "height": 465,
    "aspectRatio": "840 / 465",
    "webp": [
      {
        "src": "/media/game/hero/hero-combat-640.webp",
        "width": 640,
        "height": 354,
        "bytes": 140850
      },
      {
        "src": "/media/game/hero/hero-combat-840.webp",
        "width": 840,
        "height": 465,
        "bytes": 181004
      }
    ],
    "avif": [
      {
        "src": "/media/game/hero/hero-combat-640.avif",
        "width": 640,
        "height": 354,
        "bytes": 38106
      },
      {
        "src": "/media/game/hero/hero-combat-840.avif",
        "width": 840,
        "height": 465,
        "bytes": 57781
      }
    ]
  },
  {
    "id": "gatewarden",
    "kind": "image",
    "alt": "The Gatewarden boss approaches a tower with cannons and an expanding pulse ring in wave 10.",
    "caption": "Make the boss fight your build.",
    "category": "bosses",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/bosses/gatewarden-1440.webp",
    "width": 1440,
    "height": 900,
    "aspectRatio": "1440 / 900",
    "webp": [
      {
        "src": "/media/game/bosses/gatewarden-640.webp",
        "width": 640,
        "height": 400,
        "bytes": 123414
      },
      {
        "src": "/media/game/bosses/gatewarden-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 214578
      },
      {
        "src": "/media/game/bosses/gatewarden-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 311902
      }
    ],
    "avif": [
      {
        "src": "/media/game/bosses/gatewarden-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 34003
      },
      {
        "src": "/media/game/bosses/gatewarden-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 60633
      },
      {
        "src": "/media/game/bosses/gatewarden-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 99016
      }
    ]
  },
  {
    "id": "heavy-encounter",
    "kind": "image",
    "alt": "A heavy red enemy closes on a damaged tower while the critical hull warning is visible.",
    "caption": "Heavy targets test your defenses.",
    "category": "enemies",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/enemies/heavy-encounter-1440.webp",
    "width": 1440,
    "height": 900,
    "aspectRatio": "1440 / 900",
    "webp": [
      {
        "src": "/media/game/enemies/heavy-encounter-640.webp",
        "width": 640,
        "height": 400,
        "bytes": 121242
      },
      {
        "src": "/media/game/enemies/heavy-encounter-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 208320
      },
      {
        "src": "/media/game/enemies/heavy-encounter-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 293910
      }
    ],
    "avif": [
      {
        "src": "/media/game/enemies/heavy-encounter-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 33944
      },
      {
        "src": "/media/game/enemies/heavy-encounter-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 60261
      },
      {
        "src": "/media/game/enemies/heavy-encounter-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 96975
      }
    ]
  },
  {
    "id": "artifact-choice",
    "kind": "image",
    "alt": "Three boss reward cards offer Kinetic Feedback, Ablative Hull or Salvage Protocol.",
    "caption": "One choice. A new direction.",
    "category": "artifacts",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/artifacts/artifact-choice-1006.webp",
    "width": 1006,
    "height": 435,
    "aspectRatio": "1006 / 435",
    "webp": [
      {
        "src": "/media/game/artifacts/artifact-choice-640.webp",
        "width": 640,
        "height": 277,
        "bytes": 72768
      },
      {
        "src": "/media/game/artifacts/artifact-choice-960.webp",
        "width": 960,
        "height": 415,
        "bytes": 131482
      },
      {
        "src": "/media/game/artifacts/artifact-choice-1006.webp",
        "width": 1006,
        "height": 435,
        "bytes": 121702
      }
    ],
    "avif": [
      {
        "src": "/media/game/artifacts/artifact-choice-640.avif",
        "width": 640,
        "height": 277,
        "bytes": 25461
      },
      {
        "src": "/media/game/artifacts/artifact-choice-960.avif",
        "width": 960,
        "height": 415,
        "bytes": 47855
      },
      {
        "src": "/media/game/artifacts/artifact-choice-1006.avif",
        "width": 1006,
        "height": 435,
        "bytes": 50717
      }
    ]
  },
  {
    "id": "build-paths",
    "kind": "image",
    "alt": "The Build Paths screen shows an evolved Heavy Cannon and possible defense, economy and artillery directions.",
    "caption": "Plan what the machine becomes.",
    "category": "builds",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/builds/build-paths-1440.webp",
    "width": 1440,
    "height": 900,
    "aspectRatio": "1440 / 900",
    "webp": [
      {
        "src": "/media/game/builds/build-paths-640.webp",
        "width": 640,
        "height": 400,
        "bytes": 48314
      },
      {
        "src": "/media/game/builds/build-paths-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 79986
      },
      {
        "src": "/media/game/builds/build-paths-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 119752
      }
    ],
    "avif": [
      {
        "src": "/media/game/builds/build-paths-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 17243
      },
      {
        "src": "/media/game/builds/build-paths-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 32347
      },
      {
        "src": "/media/game/builds/build-paths-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 49047
      }
    ]
  },
  {
    "id": "hall-of-machines",
    "kind": "image",
    "alt": "The Hall of Machines records a wave 20 run and its weapons, evolutions and Kinetic Feedback Artifact.",
    "caption": "Every run leaves a machine behind.",
    "category": "hall",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/hall/hall-of-machines-1440.webp",
    "width": 1440,
    "height": 900,
    "aspectRatio": "1440 / 900",
    "webp": [
      {
        "src": "/media/game/hall/hall-of-machines-640.webp",
        "width": 640,
        "height": 400,
        "bytes": 37504
      },
      {
        "src": "/media/game/hall/hall-of-machines-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 66606
      },
      {
        "src": "/media/game/hall/hall-of-machines-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 107338
      }
    ],
    "avif": [
      {
        "src": "/media/game/hall/hall-of-machines-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 12945
      },
      {
        "src": "/media/game/hall/hall-of-machines-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 24597
      },
      {
        "src": "/media/game/hall/hall-of-machines-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 39995
      }
    ]
  },
  {
    "id": "portrait-boss",
    "kind": "image",
    "alt": "Portrait gameplay shows the Gatewarden, a multi-weapon tower and the Market beneath the arena.",
    "caption": "The same machine. A different view.",
    "category": "mobile",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/mobile/portrait-boss-720.webp",
    "width": 720,
    "height": 1280,
    "aspectRatio": "720 / 1280",
    "webp": [
      {
        "src": "/media/game/mobile/portrait-boss-640.webp",
        "width": 640,
        "height": 1138,
        "bytes": 352212
      },
      {
        "src": "/media/game/mobile/portrait-boss-720.webp",
        "width": 720,
        "height": 1280,
        "bytes": 349508
      }
    ],
    "avif": [
      {
        "src": "/media/game/mobile/portrait-boss-640.avif",
        "width": 640,
        "height": 1138,
        "bytes": 117231
      },
      {
        "src": "/media/game/mobile/portrait-boss-720.avif",
        "width": 720,
        "height": 1280,
        "bytes": 120532
      }
    ]
  }
];
