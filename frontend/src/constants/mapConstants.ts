export const METHOD_SORT: string[] = [
  "walk",
  "surf",
  "old-rod",
  "good-rod",
  "super-rod",
  "rock-smash",
  "headbutt",
  "dark-grass",
  "grass-spots",
  "cave-spots",
  "bridge-spots",
  "super-rod-spots",
  "surf-spots",
  "yellow-flowers",
  "purple-flowers",
  "red-flowers",
  "rough-terrain",
  "gift",
  "gift-egg",
  "only-one",
]

export const METHOD_INDEX: Record<string, number> = Object.fromEntries(
  METHOD_SORT.map((method, index) => [method, index]),
)
