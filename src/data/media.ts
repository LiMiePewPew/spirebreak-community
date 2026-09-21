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
    "alt": "The evolved Spirebreak Sentinel stands armed at the center of a fractured void arena during wave 24.",
    "caption": "Your Sentinel evolves with the run.",
    "category": "hero",
    "gameBuild": "c35913f5190da2acc985869b34aacb088ef668df",
    "focus": "center",
    "src": "/media/game/hero/hero-combat-960.webp",
    "width": 960,
    "height": 540,
    "aspectRatio": "960 / 540",
    "webp": [
      {
        "src": "/media/game/hero/hero-combat-640.webp",
        "width": 640,
        "height": 360,
        "bytes": 20032
      },
      {
        "src": "/media/game/hero/hero-combat-960.webp",
        "width": 960,
        "height": 540,
        "bytes": 46914
      }
    ],
    "avif": [
      {
        "src": "/media/game/hero/hero-combat-640.avif",
        "width": 640,
        "height": 360,
        "bytes": 12006
      },
      {
        "src": "/media/game/hero/hero-combat-960.avif",
        "width": 960,
        "height": 540,
        "bytes": 23816
      }
    ]
  },
  {
    "id": "gatewarden",
    "kind": "image",
    "alt": "The Gatewarden boss enters the arena as the tower prepares for its charged slam.",
    "caption": "Read the threat. Build the answer.",
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
        "bytes": 87370
      },
      {
        "src": "/media/game/bosses/gatewarden-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 155544
      },
      {
        "src": "/media/game/bosses/gatewarden-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 213570
      }
    ],
    "avif": [
      {
        "src": "/media/game/bosses/gatewarden-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 27749
      },
      {
        "src": "/media/game/bosses/gatewarden-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 46813
      },
      {
        "src": "/media/game/bosses/gatewarden-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 74866
      }
    ]
  },
  {
    "id": "heavy-encounter",
    "kind": "image",
    "alt": "The Forge Tyrant and ranged escorts surround the tower during wave 20.",
    "caption": "Different threats demand different machines.",
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
        "bytes": 91248
      },
      {
        "src": "/media/game/enemies/heavy-encounter-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 161868
      },
      {
        "src": "/media/game/enemies/heavy-encounter-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 223428
      }
    ],
    "avif": [
      {
        "src": "/media/game/enemies/heavy-encounter-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 29388
      },
      {
        "src": "/media/game/enemies/heavy-encounter-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 49976
      },
      {
        "src": "/media/game/enemies/heavy-encounter-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 79708
      }
    ]
  },
  {
    "id": "artifact-choice",
    "kind": "image",
    "alt": "Three Artifact rewards offer Kinetic Feedback, Ablative Hull or Salvage Protocol after wave 10.",
    "caption": "One choice can redirect the whole run.",
    "category": "artifacts",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/artifacts/artifact-choice-1440.webp",
    "width": 1440,
    "height": 900,
    "aspectRatio": "1440 / 900",
    "webp": [
      {
        "src": "/media/game/artifacts/artifact-choice-640.webp",
        "width": 640,
        "height": 400,
        "bytes": 37390
      },
      {
        "src": "/media/game/artifacts/artifact-choice-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 61764
      },
      {
        "src": "/media/game/artifacts/artifact-choice-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 71334
      }
    ],
    "avif": [
      {
        "src": "/media/game/artifacts/artifact-choice-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 15436
      },
      {
        "src": "/media/game/artifacts/artifact-choice-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 29435
      },
      {
        "src": "/media/game/artifacts/artifact-choice-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 46772
      }
    ]
  },
  {
    "id": "build-paths",
    "kind": "image",
    "alt": "The Build Paths screen compares Fortress, Economy, Artillery and Beam Focus directions.",
    "caption": "Plan what the machine becomes.",
    "category": "builds",
    "gameBuild": "d4706701b0368dd3a61a3f03b2be4ee476acb08c",
    "focus": "center",
    "src": "/media/game/builds/build-paths-1280.webp",
    "width": 1280,
    "height": 720,
    "aspectRatio": "1280 / 720",
    "webp": [
      {
        "src": "/media/game/builds/build-paths-640.webp",
        "width": 640,
        "height": 360,
        "bytes": 36104
      },
      {
        "src": "/media/game/builds/build-paths-960.webp",
        "width": 960,
        "height": 540,
        "bytes": 64778
      },
      {
        "src": "/media/game/builds/build-paths-1280.webp",
        "width": 1280,
        "height": 720,
        "bytes": 63038
      }
    ],
    "avif": [
      {
        "src": "/media/game/builds/build-paths-640.avif",
        "width": 640,
        "height": 360,
        "bytes": 17232
      },
      {
        "src": "/media/game/builds/build-paths-960.avif",
        "width": 960,
        "height": 540,
        "bytes": 31776
      },
      {
        "src": "/media/game/builds/build-paths-1280.avif",
        "width": 1280,
        "height": 720,
        "bytes": 43405
      }
    ]
  },
  {
    "id": "hall-of-machines",
    "kind": "image",
    "alt": "The Hall of Machines records a defeated explosive and hull-focused build and its Artifacts.",
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
        "bytes": 11848
      },
      {
        "src": "/media/game/hall/hall-of-machines-960.webp",
        "width": 960,
        "height": 600,
        "bytes": 19724
      },
      {
        "src": "/media/game/hall/hall-of-machines-1440.webp",
        "width": 1440,
        "height": 900,
        "bytes": 20102
      }
    ],
    "avif": [
      {
        "src": "/media/game/hall/hall-of-machines-640.avif",
        "width": 640,
        "height": 400,
        "bytes": 6788
      },
      {
        "src": "/media/game/hall/hall-of-machines-960.avif",
        "width": 960,
        "height": 600,
        "bytes": 11208
      },
      {
        "src": "/media/game/hall/hall-of-machines-1440.avif",
        "width": 1440,
        "height": 900,
        "bytes": 16107
      }
    ]
  },
  {
    "id": "portrait-boss",
    "kind": "image",
    "alt": "Portrait gameplay shows the Forge Tyrant, ranged escorts and tower controls during wave 20.",
    "caption": "The same decisions in portrait.",
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
        "bytes": 231106
      },
      {
        "src": "/media/game/mobile/portrait-boss-720.webp",
        "width": 720,
        "height": 1280,
        "bytes": 152962
      }
    ],
    "avif": [
      {
        "src": "/media/game/mobile/portrait-boss-640.avif",
        "width": 640,
        "height": 1138,
        "bytes": 90249
      },
      {
        "src": "/media/game/mobile/portrait-boss-720.avif",
        "width": 720,
        "height": 1280,
        "bytes": 75533
      }
    ]
  }
];
