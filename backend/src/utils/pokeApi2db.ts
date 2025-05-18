import type { Languages, NamesBaseTableType, Type } from "@/db/schemas/Shared"
import type { Name, NamedAPIResource, PokemonType, StatElement } from "pokedex-promise-v2"

export const generateNamesArray = (namesApiArray: Name[]): NamesBaseTableType[] => {
  const namesDb = []

  for (const nameApi of namesApiArray) {
    namesDb.push({
      language: nameApi.language.name as Languages,
      name: nameApi.name,
    })
  }
  return namesDb
}

export const findEnglishName = (names: NamesBaseTableType[]) => {
  const name = names.find(element => element.language === "en")
  return name!.name
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
  const statsDb: Stats = {
    hp: 0,
    atk: 0,
    spAtk: 0,
    def: 0,
    spDef: 0,
    speed: 0,
  }

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
  let apiTypes = []
  if (Array.isArray(typesApiArray)) {
    apiTypes = typesApiArray.map(element => element.type)
  } else {
    apiTypes.push(typesApiArray)
  }

  const types: Type[] = []
  types.push(apiTypes[0]?.name as unknown as Type)
  apiTypes[1] ? types.push(apiTypes[1]?.name as unknown as Type) : null

  return types
}
