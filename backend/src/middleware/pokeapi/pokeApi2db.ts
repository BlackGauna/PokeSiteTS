import { PokemonTypes } from "@/db/schemas/Shared"
import type { Languages, NamesBase, Type } from "@/db/schemas/Shared"
import type { Name, NamedAPIResource, PokemonType, StatElement } from "pokedex-promise-v2"

const toType = (name: string): Type => {
  if ((PokemonTypes.enumValues as readonly string[]).includes(name)) return name as Type
  throw new Error(`Unknown type from PokeAPI: "${name}"`)
}

export const generateNamesArray = (namesApiArray: Name[]): NamesBase[] =>
  namesApiArray.map(n => ({ language: n.language.name as Languages, name: n.name }))

export const findEnglishName = (names: NamesBase[]): string => {
  const name = names.find(e => e.language === "en")
  if (!name) throw new Error(`No English name found: ${JSON.stringify(names)}`)
  return name.name
}

type Stats = {
  hp: number
  atk: number
  spAtk: number
  def: number
  spDef: number
  speed: number
}

type StatNames =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed"
  | "accuracy"
  | "evasion"

export const generateStats = (statsApiArray: StatElement[]): Stats => {
  const statsDb: Stats = { hp: 0, atk: 0, spAtk: 0, def: 0, spDef: 0, speed: 0 }

  for (const statApi of statsApiArray) {
    switch (statApi.stat.name as StatNames) {
      case "hp":
        statsDb.hp = statApi.base_stat
        break
      case "attack":
        statsDb.atk = statApi.base_stat
        break
      case "special-attack":
        statsDb.spAtk = statApi.base_stat
        break
      case "defense":
        statsDb.def = statApi.base_stat
        break
      case "special-defense":
        statsDb.spDef = statApi.base_stat
        break
      case "speed":
        statsDb.speed = statApi.base_stat
        break
      default:
        break
    }
  }

  return statsDb
}

export const generateTypes = (typesApiArray: PokemonType[] | NamedAPIResource): Type[] => {
  if (Array.isArray(typesApiArray)) return typesApiArray.map(e => toType(e.type.name))
  return [toType(typesApiArray.name)]
}
