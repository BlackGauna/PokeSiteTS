import { PokemonNameType } from "@schemas/Pokemon"
import { Languages, Type } from "@schemas/Shared"
import {
  NamedAPIResource,
  PokemonSpecies,
  PokemonType,
  StatElement,
} from "pokedex-promise-v2"

type PokemonNamesApi = PokemonSpecies["names"]

export const generateNamesArray = (
  namesApiArray: PokemonNamesApi,
  pokemonId: number,
): PokemonNameType[] => {
  const namesDb: PokemonNameType[] = []
  for (const nameApi of namesApiArray) {
    namesDb.push({
      language: nameApi.language.name as Languages,
      name: nameApi.name,
      pokemonId: pokemonId,
    })
  }

  return namesDb
}

export const findEnglishName = (names: PokemonNameType[]) => {
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

export const generateTypes = (
  typesApiArray: PokemonType[] | NamedAPIResource,
) => {
  let types = []
  if (Array.isArray(typesApiArray)) {
    types = typesApiArray.map(element => element.type)
  } else {
    types.push(typesApiArray)
  }

  const type = types[0].name as Type
  const type2 = (types[1]?.name as Type) ?? null

  return { type, type2 }
}
