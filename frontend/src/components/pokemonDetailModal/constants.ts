import type { LearnMethod } from "@/server/db/enums/MoveLearnMethod"

export const KNOWN_TABS: { key: LearnMethod; label: string }[] = [
  { key: "level-up", label: "Level Up" },
  { key: "machine", label: "TM/HM" },
  { key: "egg", label: "Egg" },
  { key: "tutor", label: "Tutor" },
]

export const MISC_METHODS = new Set<LearnMethod>([
  "stadium-surfing-pikachu",
  "light-ball-egg",
  "colosseum-purification",
  "xd-shadow",
  "xd-purification",
  "form-change",
  "zygarde-cube",
])

export const TYPE_BADGE_LIGHT: Record<string, string> = {
  normal: "bg-stone-100 text-stone-700",
  fighting: "bg-orange-100 text-orange-800",
  flying: "bg-sky-100 text-sky-700",
  poison: "bg-purple-100 text-purple-800",
  ground: "bg-yellow-100 text-yellow-800",
  rock: "bg-yellow-100 text-yellow-800",
  bug: "bg-lime-100 text-lime-700",
  ghost: "bg-violet-100 text-violet-800",
  steel: "bg-slate-100 text-slate-700",
  fire: "bg-orange-100 text-orange-700",
  water: "bg-blue-100 text-blue-700",
  grass: "bg-green-100 text-green-700",
  electric: "bg-yellow-100 text-yellow-700",
  psychic: "bg-pink-100 text-pink-700",
  ice: "bg-cyan-100 text-cyan-700",
  dragon: "bg-indigo-100 text-indigo-700",
  dark: "bg-stone-200 text-stone-800",
  fairy: "bg-pink-100 text-pink-600",
  stellar: "bg-sky-100 text-sky-600",
  unknown: "bg-gray-100 text-gray-600",
}

export function formatName(name: string): string {
  return name
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
