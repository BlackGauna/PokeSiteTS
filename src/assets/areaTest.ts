type Areas = {
  [key: string]: {
    area: [number[], number[]]
    encounters: {
      [key: string]: {
        chance: number
        max_level: number
        method: string
        min_level: number
      }[]
    }
  }
}

const areas: Areas = {
  "petalburg-city": {
    area: [
      [752, 3792],
      [1232, 4272],
    ],
    encounters: {
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
        { chance: 1, max_level: 10, method: "surf", min_level: 5 },
      ],
      corphish: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "slateport-city": {
    area: [
      [3312, 4272],
      [3952, 5232],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "lilycove-city": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      staryu: [{ chance: 15, max_level: 30, method: "super-rod", min_level: 25 }],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "mossdeep-city": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "mossdeep-city-stevens-house": {
    area: [[], []],
    encounters: {
      beldum: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
    },
  },
  "sootopolis-city": {
    area: [[], []],
    encounters: {
      tentacool: [{ chance: 30, max_level: 10, method: "old-rod", min_level: 5 }],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      gyarados: [
        { chance: 15, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 4, max_level: 45, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 5 },
      ],
    },
  },
  "ever-grande-city": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      corsola: [{ chance: 15, max_level: 35, method: "super-rod", min_level: 30 }],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      luvdisc: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
      ],
    },
  },
  "hoenn-route-101": {
    area: [
      [2032, 4272],
      [2352, 4560],
    ],
    encounters: {
      treecko: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
      torchic: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
      mudkip: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
      poochyena: [
        { chance: 20, max_level: 2, method: "walk", min_level: 2 },
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 5, max_level: 3, method: "walk", min_level: 3 },
      ],
      zigzagoon: [
        { chance: 4, max_level: 2, method: "walk", min_level: 2 },
        { chance: 4, max_level: 2, method: "walk", min_level: 2 },
        { chance: 1, max_level: 3, method: "walk", min_level: 3 },
        { chance: 1, max_level: 3, method: "walk", min_level: 3 },
      ],
      wurmple: [
        { chance: 20, max_level: 2, method: "walk", min_level: 2 },
        { chance: 10, max_level: 2, method: "walk", min_level: 2 },
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 5, max_level: 3, method: "walk", min_level: 3 },
      ],
    },
  },
  "hoenn-route-102": {
    area: [
      [1232, 3984],
      [2032, 4272],
    ],
    encounters: {
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 1, max_level: 30, method: "surf", min_level: 20 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
      ],
      poochyena: [
        { chance: 20, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 4, method: "walk", min_level: 4 },
      ],
      zigzagoon: [
        { chance: 5, max_level: 3, method: "walk", min_level: 3 },
        { chance: 5, max_level: 3, method: "walk", min_level: 3 },
        { chance: 4, max_level: 4, method: "walk", min_level: 4 },
        { chance: 1, max_level: 4, method: "walk", min_level: 4 },
      ],
      wurmple: [
        { chance: 20, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 4, method: "walk", min_level: 4 },
      ],
      lotad: [
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 4, method: "walk", min_level: 4 },
      ],
      seedot: [{ chance: 1, max_level: 3, method: "walk", min_level: 3 }],
      ralts: [{ chance: 4, max_level: 4, method: "walk", min_level: 4 }],
      corphish: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-103": {
    area: [
      [2032, 3632],
      [3312, 3984],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      poochyena: [
        { chance: 20, max_level: 2, method: "walk", min_level: 2 },
        { chance: 20, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 10, max_level: 4, method: "walk", min_level: 4 },
      ],
      zigzagoon: [
        { chance: 10, max_level: 3, method: "walk", min_level: 3 },
        { chance: 5, max_level: 3, method: "walk", min_level: 3 },
        { chance: 5, max_level: 4, method: "walk", min_level: 4 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 10, max_level: 2, method: "walk", min_level: 2 },
        { chance: 4, max_level: 3, method: "walk", min_level: 3 },
        { chance: 4, max_level: 3, method: "walk", min_level: 3 },
        { chance: 1, max_level: 2, method: "walk", min_level: 2 },
        { chance: 1, max_level: 4, method: "walk", min_level: 4 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-104": {
    area: [
      [112, 2992],
      [752, 4416],
    ],
    encounters: {
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      marill: [
        { chance: 10, max_level: 5, method: "walk", min_level: 5 },
        { chance: 10, max_level: 4, method: "walk", min_level: 4 },
      ],
      poochyena: [
        { chance: 20, max_level: 4, method: "walk", min_level: 4 },
        { chance: 10, max_level: 5, method: "walk", min_level: 5 },
        { chance: 10, max_level: 5, method: "walk", min_level: 5 },
      ],
      wurmple: [{ chance: 20, max_level: 4, method: "walk", min_level: 4 }],
      taillow: [
        { chance: 5, max_level: 4, method: "walk", min_level: 4 },
        { chance: 5, max_level: 5, method: "walk", min_level: 5 },
      ],
      wingull: [
        { chance: 60, max_level: 30, method: "surf", min_level: 10 },
        { chance: 30, max_level: 25, method: "surf", min_level: 15 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 4, method: "walk", min_level: 4 },
        { chance: 4, max_level: 4, method: "walk", min_level: 4 },
        { chance: 1, max_level: 3, method: "walk", min_level: 3 },
        { chance: 1, max_level: 5, method: "walk", min_level: 5 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
    },
  },
  "hoenn-route-105": {
    area: [
      [112, 4416],
      [752, 5552],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-106": {
    area: [
      [112, 5552],
      [1392, 5872],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-107": {
    area: [
      [1392, 5872],
      [2352, 6176],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-108": {
    area: [
      [2352, 5872],
      [3312, 6192],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-109": {
    area: [
      [3312, 5232],
      [3952, 6240],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-110": {
    area: [
      [3312, 2672],
      [3952, 4272],
    ],
    encounters: {
      oddish: [{ chance: 10, max_level: 13, method: "walk", min_level: 13 }],
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      poochyena: [{ chance: 20, max_level: 12, method: "walk", min_level: 12 }],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 12, method: "walk", min_level: 12 },
        { chance: 4, max_level: 12, method: "walk", min_level: 12 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      electrike: [
        { chance: 20, max_level: 12, method: "walk", min_level: 12 },
        { chance: 10, max_level: 13, method: "walk", min_level: 13 },
      ],
      plusle: [
        { chance: 1, max_level: 12, method: "walk", min_level: 12 },
        { chance: 1, max_level: 13, method: "walk", min_level: 13 },
      ],
      minun: [
        { chance: 10, max_level: 13, method: "walk", min_level: 13 },
        { chance: 5, max_level: 13, method: "walk", min_level: 13 },
      ],
      gulpin: [
        { chance: 10, max_level: 12, method: "walk", min_level: 12 },
        { chance: 5, max_level: 13, method: "walk", min_level: 13 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-111": {
    area: [[], []],
    encounters: {
      sandshrew: [
        { chance: 20, max_level: 20, method: "walk", min_level: 20 },
        { chance: 10, max_level: 21, method: "walk", min_level: 21 },
        { chance: 5, max_level: 19, method: "walk", min_level: 19 },
      ],
      geodude: [
        { chance: 60, max_level: 15, method: "rock-smash", min_level: 10 },
        { chance: 30, max_level: 10, method: "rock-smash", min_level: 5 },
        { chance: 5, max_level: 20, method: "rock-smash", min_level: 15 },
        { chance: 4, max_level: 20, method: "rock-smash", min_level: 15 },
        { chance: 1, max_level: 20, method: "rock-smash", min_level: 15 },
      ],
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 1, max_level: 30, method: "surf", min_level: 20 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
      ],
      trapinch: [
        { chance: 20, max_level: 20, method: "walk", min_level: 20 },
        { chance: 10, max_level: 21, method: "walk", min_level: 21 },
        { chance: 5, max_level: 19, method: "walk", min_level: 19 },
      ],
      cacnea: [
        { chance: 4, max_level: 20, method: "walk", min_level: 20 },
        { chance: 1, max_level: 22, method: "walk", min_level: 22 },
        { chance: 1, max_level: 22, method: "walk", min_level: 22 },
      ],
      barboach: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      baltoy: [
        { chance: 10, max_level: 19, method: "walk", min_level: 19 },
        { chance: 10, max_level: 21, method: "walk", min_level: 21 },
        { chance: 4, max_level: 20, method: "walk", min_level: 20 },
      ],
    },
  },
  "hoenn-route-112": {
    area: [[], []],
    encounters: {
      marill: [
        { chance: 10, max_level: 15, method: "walk", min_level: 15 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 5, max_level: 16, method: "walk", min_level: 16 },
      ],
      numel: [
        { chance: 20, max_level: 15, method: "walk", min_level: 15 },
        { chance: 20, max_level: 15, method: "walk", min_level: 15 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 5, max_level: 16, method: "walk", min_level: 16 },
        { chance: 4, max_level: 16, method: "walk", min_level: 16 },
        { chance: 4, max_level: 16, method: "walk", min_level: 16 },
        { chance: 1, max_level: 16, method: "walk", min_level: 16 },
        { chance: 1, max_level: 16, method: "walk", min_level: 16 },
      ],
    },
  },
  "hoenn-route-113": {
    area: [[], []],
    encounters: {
      slugma: [
        { chance: 10, max_level: 15, method: "walk", min_level: 15 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 5, max_level: 16, method: "walk", min_level: 16 },
      ],
      skarmory: [
        { chance: 4, max_level: 16, method: "walk", min_level: 16 },
        { chance: 1, max_level: 16, method: "walk", min_level: 16 },
      ],
      spinda: [
        { chance: 20, max_level: 15, method: "walk", min_level: 15 },
        { chance: 20, max_level: 15, method: "walk", min_level: 15 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 5, max_level: 16, method: "walk", min_level: 16 },
        { chance: 4, max_level: 16, method: "walk", min_level: 16 },
        { chance: 1, max_level: 16, method: "walk", min_level: 16 },
      ],
    },
  },
  "hoenn-route-114": {
    area: [[], []],
    encounters: {
      geodude: [
        { chance: 60, max_level: 15, method: "rock-smash", min_level: 10 },
        { chance: 30, max_level: 10, method: "rock-smash", min_level: 5 },
        { chance: 5, max_level: 20, method: "rock-smash", min_level: 15 },
        { chance: 4, max_level: 20, method: "rock-smash", min_level: 15 },
        { chance: 1, max_level: 20, method: "rock-smash", min_level: 15 },
      ],
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 1, max_level: 30, method: "surf", min_level: 20 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
      ],
      lotad: [
        { chance: 20, max_level: 16, method: "walk", min_level: 16 },
        { chance: 10, max_level: 15, method: "walk", min_level: 15 },
      ],
      lombre: [
        { chance: 10, max_level: 16, method: "walk", min_level: 16 },
        { chance: 5, max_level: 16, method: "walk", min_level: 16 },
        { chance: 5, max_level: 18, method: "walk", min_level: 18 },
      ],
      nuzleaf: [{ chance: 1, max_level: 15, method: "walk", min_level: 15 }],
      swablu: [
        { chance: 20, max_level: 16, method: "walk", min_level: 16 },
        { chance: 10, max_level: 17, method: "walk", min_level: 17 },
        { chance: 10, max_level: 15, method: "walk", min_level: 15 },
      ],
      seviper: [
        { chance: 4, max_level: 17, method: "walk", min_level: 17 },
        { chance: 4, max_level: 15, method: "walk", min_level: 15 },
        { chance: 1, max_level: 17, method: "walk", min_level: 17 },
      ],
      barboach: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-115": {
    area: [[], []],
    encounters: {
      jigglypuff: [
        { chance: 5, max_level: 24, method: "walk", min_level: 24 },
        { chance: 5, max_level: 25, method: "walk", min_level: 25 },
      ],
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      taillow: [
        { chance: 20, max_level: 23, method: "walk", min_level: 23 },
        { chance: 10, max_level: 24, method: "walk", min_level: 24 },
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
      ],
      swellow: [{ chance: 10, max_level: 25, method: "walk", min_level: 25 }],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 24, method: "walk", min_level: 24 },
        { chance: 4, max_level: 24, method: "walk", min_level: 24 },
        { chance: 1, max_level: 26, method: "walk", min_level: 26 },
        { chance: 1, max_level: 25, method: "walk", min_level: 25 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      swablu: [
        { chance: 20, max_level: 23, method: "walk", min_level: 23 },
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
      ],
    },
  },
  "hoenn-route-116": {
    area: [[], []],
    encounters: {
      abra: [{ chance: 10, max_level: 7, method: "walk", min_level: 7 }],
      poochyena: [
        { chance: 20, max_level: 6, method: "walk", min_level: 6 },
        { chance: 4, max_level: 7, method: "walk", min_level: 7 },
        { chance: 4, max_level: 8, method: "walk", min_level: 8 },
      ],
      taillow: [
        { chance: 10, max_level: 6, method: "walk", min_level: 6 },
        { chance: 5, max_level: 7, method: "walk", min_level: 7 },
        { chance: 5, max_level: 8, method: "walk", min_level: 8 },
      ],
      nincada: [
        { chance: 10, max_level: 6, method: "walk", min_level: 6 },
        { chance: 10, max_level: 7, method: "walk", min_level: 7 },
      ],
      whismur: [{ chance: 20, max_level: 6, method: "walk", min_level: 6 }],
      skitty: [
        { chance: 1, max_level: 7, method: "walk", min_level: 7 },
        { chance: 1, max_level: 8, method: "walk", min_level: 8 },
      ],
    },
  },
  "hoenn-route-117": {
    area: [[], []],
    encounters: {
      oddish: [
        { chance: 20, max_level: 13, method: "walk", min_level: 13 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
        { chance: 10, max_level: 13, method: "walk", min_level: 13 },
      ],
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 1, max_level: 30, method: "surf", min_level: 20 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
        { chance: 10, max_level: 13, method: "walk", min_level: 13 },
      ],
      poochyena: [
        { chance: 20, max_level: 13, method: "walk", min_level: 13 },
        { chance: 10, max_level: 14, method: "walk", min_level: 14 },
      ],
      seedot: [{ chance: 1, max_level: 13, method: "walk", min_level: 13 }],
      volbeat: [{ chance: 1, max_level: 13, method: "walk", min_level: 13 }],
      illumise: [
        { chance: 5, max_level: 13, method: "walk", min_level: 13 },
        { chance: 5, max_level: 13, method: "walk", min_level: 13 },
        { chance: 4, max_level: 14, method: "walk", min_level: 14 },
        { chance: 4, max_level: 14, method: "walk", min_level: 14 },
      ],
      corphish: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-118": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      zigzagoon: [
        { chance: 20, max_level: 24, method: "walk", min_level: 24 },
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
      ],
      linoone: [{ chance: 10, max_level: 26, method: "walk", min_level: 26 }],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 5, max_level: 25, method: "walk", min_level: 25 },
        { chance: 5, max_level: 25, method: "walk", min_level: 25 },
        { chance: 4, max_level: 26, method: "walk", min_level: 26 },
        { chance: 4, max_level: 26, method: "walk", min_level: 26 },
        { chance: 1, max_level: 27, method: "walk", min_level: 27 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      electrike: [
        { chance: 20, max_level: 24, method: "walk", min_level: 24 },
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
      ],
      manectric: [{ chance: 10, max_level: 26, method: "walk", min_level: 26 }],
      carvanha: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      kecleon: [{ chance: 1, max_level: 25, method: "walk", min_level: 25 }],
    },
  },
  "hoenn-route-119": {
    area: [[], []],
    encounters: {
      oddish: [
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 5, max_level: 27, method: "walk", min_level: 27 },
        { chance: 5, max_level: 24, method: "walk", min_level: 24 },
      ],
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      zigzagoon: [
        { chance: 20, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 27, method: "walk", min_level: 27 },
      ],
      linoone: [
        { chance: 20, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 27, method: "walk", min_level: 27 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      carvanha: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      feebas: [{ chance: 50, max_level: 25, method: "feebas-tile-fishing", min_level: 20 }],
      kecleon: [
        { chance: 1, max_level: 25, method: "walk", min_level: 25 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
      ],
      tropius: [
        { chance: 4, max_level: 25, method: "walk", min_level: 25 },
        { chance: 4, max_level: 26, method: "walk", min_level: 26 },
        { chance: 1, max_level: 27, method: "walk", min_level: 27 },
      ],
    },
  },
  "hoenn-route-119-weather-institute": {
    area: [[], []],
    encounters: {
      castform: [{ chance: 100, max_level: 25, method: "gift", min_level: 25 }],
    },
  },
  "hoenn-route-120": {
    area: [[], []],
    encounters: {
      oddish: [
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 5, max_level: 27, method: "walk", min_level: 27 },
      ],
      goldeen: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 1, max_level: 30, method: "surf", min_level: 20 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      marill: [
        { chance: 60, max_level: 30, method: "surf", min_level: 20 },
        { chance: 30, max_level: 20, method: "surf", min_level: 10 },
        { chance: 5, max_level: 35, method: "surf", min_level: 30 },
        { chance: 4, max_level: 10, method: "surf", min_level: 5 },
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
        { chance: 5, max_level: 27, method: "walk", min_level: 27 },
      ],
      poochyena: [{ chance: 20, max_level: 25, method: "walk", min_level: 25 }],
      mightyena: [
        { chance: 20, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 27, method: "walk", min_level: 27 },
      ],
      seedot: [{ chance: 1, max_level: 25, method: "walk", min_level: 25 }],
      barboach: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      kecleon: [
        { chance: 1, max_level: 25, method: "walk", min_level: 25 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
        { chance: 100, max_level: 30, method: "devon-scope", min_level: 30 },
      ],
      absol: [
        { chance: 4, max_level: 25, method: "walk", min_level: 25 },
        { chance: 4, max_level: 27, method: "walk", min_level: 27 },
      ],
    },
  },
  "hoenn-route-121": {
    area: [[], []],
    encounters: {
      oddish: [
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 5, max_level: 28, method: "walk", min_level: 28 },
      ],
      gloom: [{ chance: 5, max_level: 28, method: "walk", min_level: 28 }],
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      poochyena: [{ chance: 20, max_level: 26, method: "walk", min_level: 26 }],
      mightyena: [
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 10, max_level: 28, method: "walk", min_level: 28 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 26, method: "walk", min_level: 26 },
        { chance: 4, max_level: 27, method: "walk", min_level: 27 },
        { chance: 1, max_level: 28, method: "walk", min_level: 28 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      kecleon: [{ chance: 1, max_level: 25, method: "walk", min_level: 25 }],
      shuppet: [
        { chance: 20, max_level: 26, method: "walk", min_level: 26 },
        { chance: 10, max_level: 28, method: "walk", min_level: 28 },
      ],
    },
  },
  "hoenn-route-122": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-123": {
    area: [[], []],
    encounters: {
      oddish: [
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 5, max_level: 28, method: "walk", min_level: 28 },
      ],
      gloom: [{ chance: 5, max_level: 28, method: "walk", min_level: 28 }],
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      poochyena: [{ chance: 20, max_level: 26, method: "walk", min_level: 26 }],
      mightyena: [
        { chance: 10, max_level: 26, method: "walk", min_level: 26 },
        { chance: 10, max_level: 28, method: "walk", min_level: 28 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
        { chance: 4, max_level: 26, method: "walk", min_level: 26 },
        { chance: 4, max_level: 27, method: "walk", min_level: 27 },
        { chance: 1, max_level: 28, method: "walk", min_level: 28 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      kecleon: [{ chance: 1, max_level: 25, method: "walk", min_level: 25 }],
      shuppet: [
        { chance: 20, max_level: 26, method: "walk", min_level: 26 },
        { chance: 10, max_level: 28, method: "walk", min_level: 28 },
      ],
    },
  },
  "hoenn-route-124": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-124-underwater": {
    area: [[], []],
    encounters: {
      chinchou: [{ chance: 30, max_level: 30, method: "seaweed", min_level: 20 }],
      clamperl: [
        { chance: 60, max_level: 30, method: "seaweed", min_level: 20 },
        { chance: 5, max_level: 35, method: "seaweed", min_level: 30 },
      ],
      relicanth: [
        { chance: 4, max_level: 35, method: "seaweed", min_level: 30 },
        { chance: 1, max_level: 35, method: "seaweed", min_level: 30 },
      ],
    },
  },
  "hoenn-route-125": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-126": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-126-underwater": {
    area: [[], []],
    encounters: {
      chinchou: [{ chance: 30, max_level: 30, method: "seaweed", min_level: 20 }],
      clamperl: [
        { chance: 60, max_level: 30, method: "seaweed", min_level: 20 },
        { chance: 5, max_level: 35, method: "seaweed", min_level: 30 },
      ],
      relicanth: [
        { chance: 4, max_level: 35, method: "seaweed", min_level: 30 },
        { chance: 1, max_level: 35, method: "seaweed", min_level: 30 },
      ],
    },
  },
  "hoenn-route-127": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-128": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      corsola: [{ chance: 15, max_level: 35, method: "super-rod", min_level: 30 }],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      luvdisc: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
      ],
    },
  },
  "hoenn-route-129": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [{ chance: 4, max_level: 30, method: "surf", min_level: 25 }],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      wailord: [{ chance: 1, max_level: 30, method: "surf", min_level: 25 }],
    },
  },
  "hoenn-route-130": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
      wynaut: [
        { chance: 20, max_level: 30, method: "walk", min_level: 30 },
        { chance: 20, max_level: 35, method: "walk", min_level: 35 },
        { chance: 10, max_level: 25, method: "walk", min_level: 25 },
        { chance: 10, max_level: 40, method: "walk", min_level: 40 },
        { chance: 10, max_level: 20, method: "walk", min_level: 20 },
        { chance: 10, max_level: 45, method: "walk", min_level: 45 },
        { chance: 5, max_level: 15, method: "walk", min_level: 15 },
        { chance: 5, max_level: 50, method: "walk", min_level: 50 },
        { chance: 4, max_level: 10, method: "walk", min_level: 10 },
        { chance: 4, max_level: 5, method: "walk", min_level: 5 },
        { chance: 1, max_level: 10, method: "walk", min_level: 10 },
        { chance: 1, max_level: 5, method: "walk", min_level: 5 },
      ],
    },
  },
  "hoenn-route-131": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-132": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      horsea: [{ chance: 15, max_level: 30, method: "super-rod", min_level: 25 }],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-133": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      horsea: [{ chance: 15, max_level: 30, method: "super-rod", min_level: 25 }],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "hoenn-route-134": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      horsea: [{ chance: 15, max_level: 30, method: "super-rod", min_level: 25 }],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "dewford-town": {
    area: [
      [960, 5872],
      [1392, 6176],
    ],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 25, method: "super-rod", min_level: 20 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "pacifidlog-town": {
    area: [[], []],
    encounters: {
      tentacool: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 30, max_level: 10, method: "old-rod", min_level: 5 },
        { chance: 60, max_level: 35, method: "surf", min_level: 5 },
      ],
      magikarp: [
        { chance: 60, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 70, max_level: 10, method: "old-rod", min_level: 5 },
      ],
      wingull: [
        { chance: 30, max_level: 30, method: "surf", min_level: 10 },
        { chance: 5, max_level: 25, method: "surf", min_level: 15 },
      ],
      pelipper: [
        { chance: 4, max_level: 30, method: "surf", min_level: 25 },
        { chance: 1, max_level: 30, method: "surf", min_level: 25 },
      ],
      sharpedo: [{ chance: 40, max_level: 35, method: "super-rod", min_level: 30 }],
      wailmer: [
        { chance: 20, max_level: 30, method: "good-rod", min_level: 10 },
        { chance: 40, max_level: 35, method: "super-rod", min_level: 30 },
        { chance: 15, max_level: 30, method: "super-rod", min_level: 25 },
        { chance: 4, max_level: 40, method: "super-rod", min_level: 35 },
        { chance: 1, max_level: 45, method: "super-rod", min_level: 40 },
      ],
    },
  },
  "littleroot-town": {
    area: [[], []],
    encounters: {
      chikorita: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
      cyndaquil: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
      totodile: [{ chance: 100, max_level: 5, method: "gift", min_level: 5 }],
    },
  },
  "lavaridge-town": {
    area: [[], []],
    encounters: {
      wynaut: [{ chance: 100, max_level: 5, method: "gift-egg", min_level: 5 }],
    },
  },
  "rustboro-city": {
    area: [[], []],
    encounters: {
      lileep: [{ chance: 100, max_level: 20, method: "gift", min_level: 20 }],
      anorith: [{ chance: 100, max_level: 20, method: "gift", min_level: 20 }],
    },
  },
}

export default areas
