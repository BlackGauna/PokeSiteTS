type Areas = {
  [key: string]: {
    area: [number[], number[]] // Define the structure of each area as an array of two number arrays
  }
}
const locationAreas: Areas = {
  "petalburg-city": {
    area: [
      [752, 3792],
      [1232, 4272],
    ],
  },
  "slateport-city": {
    area: [
      [3312, 4272],
      [3952, 5232],
    ],
  },
  "lilycove-city": {
    area: [
      [7792, 1232],
      [9072, 1872],
    ],
  },
  "mossdeep-city": {
    area: [
      [10352, 1712],
      [11632, 2352],
    ],
  },
  "mossdeep-city-stevens-house": { area: [[], []] },
  "sootopolis-city": { area: [[], []] },
  "ever-grande-city": {
    area: [
      [12272, 2992],
      [12912, 4272],
    ],
  },
  "hoenn-route-101": {
    area: [
      [2032, 4272],
      [2352, 4560],
    ],
  },
  "hoenn-route-102": {
    area: [
      [1232, 3984],
      [2032, 4272],
    ],
  },
  "hoenn-route-103": {
    area: [
      [2032, 3632],
      [3312, 3984],
    ],
  },
  "hoenn-route-104": {
    area: [
      [112, 2992],
      [752, 4416],
    ],
  },
  "hoenn-route-105": {
    area: [
      [112, 4416],
      [752, 5552],
    ],
  },
  "hoenn-route-106": {
    area: [
      [112, 5552],
      [1392, 5872],
    ],
  },
  "hoenn-route-107": {
    area: [
      [1392, 5872],
      [2352, 6176],
    ],
  },
  "hoenn-route-108": {
    area: [
      [2352, 5872],
      [3312, 6192],
    ],
  },
  "hoenn-route-109": {
    area: [
      [3312, 5232],
      [3952, 6240],
    ],
  },
  "hoenn-route-110": {
    area: [
      [3312, 2672],
      [3952, 4272],
    ],
  },
  "hoenn-route-111": {
    area: [
      [3312, 112],
      [3952, 2352],
    ],
  },
  "hoenn-route-112": {
    area: [
      [2672, 512],
      [3312, 1392],
    ],
  },
  "hoenn-route-113": {
    area: [
      [1712, 112],
      [3312, 320],
    ],
  },
  "hoenn-route-114": {
    area: [
      [752, 112],
      [1392, 1392],
    ],
  },
  "hoenn-route-115": {
    area: [
      [112, 752],
      [752, 2032],
    ],
  },
  "hoenn-route-116": {
    area: [
      [752, 2032],
      [2352, 2352],
    ],
  },
  "hoenn-route-117": {
    area: [
      [2352, 2336],
      [3312, 2656],
    ],
  },
  "hoenn-route-118": {
    area: [
      [3952, 2352],
      [5232, 2672],
    ],
  },
  "hoenn-route-119": {
    area: [
      [4480, 112],
      [5232, 2352],
    ],
  },
  "hoenn-route-119-weather-institute": { area: [[], []] },
  "hoenn-route-120": {
    area: [
      [5872, 112],
      [6512, 1712],
    ],
  },
  "hoenn-route-121": {
    area: [
      [6512, 1392],
      [7680, 1712],
    ],
  },
  "hoenn-route-122": {
    area: [
      [6832, 1712],
      [7472, 2352],
    ],
  },
  "hoenn-route-123": {
    area: [
      [5232, 1336],
      [7264, 2672],
    ],
  },
  "hoenn-route-124": {
    area: [
      [9072, 1072],
      [10352, 2352],
    ],
  },
  "hoenn-route-124-underwater": { area: [[], []] },
  "hoenn-route-125": {
    area: [
      [10352, 1072],
      [11632, 1712],
    ],
  },
  "hoenn-route-126": {
    area: [
      [9072, 2352],
      [10352, 3632],
    ],
  },
  "hoenn-route-126-underwater": { area: [[], []] },
  "hoenn-route-127": {
    area: [
      [10352, 2352],
      [11632, 3632],
    ],
  },
  "hoenn-route-128": {
    area: [
      [10352, 3632],
      [12272, 4272],
    ],
  },
  "hoenn-route-129": {
    area: [
      [10352, 4272],
      [11616, 4912],
    ],
  },
  "hoenn-route-130": {
    area: [
      [9072, 4272],
      [10352, 4912],
    ],
  },
  "hoenn-route-131": {
    area: [
      [8112, 4272],
      [9072, 4912],
    ],
  },
  "hoenn-route-132": {
    area: [
      [6512, 4272],
      [7792, 4912],
    ],
  },
  "hoenn-route-133": {
    area: [
      [5232, 4272],
      [6512, 4912],
    ],
  },
  "hoenn-route-134": {
    area: [
      [3952, 4272],
      [5232, 4912],
    ],
  },
  "dewford-town": {
    area: [
      [960, 5872],
      [1392, 6176],
    ],
  },
  "pacifidlog-town": {
    area: [
      [7792, 4272],
      [8112, 4912],
    ],
  },
  "littleroot-town": {
    area: [
      [2032, 4592],
      [2352, 4912],
    ],
  },
  "lavaridge-town": {
    area: [
      [2352, 1072],
      [2672, 1376],
    ],
  },
  "rustboro-city": {
    area: [
      [112, 2032],
      [752, 2992],
    ],
  },
}

export default locationAreas
