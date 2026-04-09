import type { LearnMethod } from "@/db/enums/MoveLearnMethod"
import { VersionGroup } from "@/db/schemas/Shared"
import type { MoveInsert } from "@/types/Move"
import type { PokemonInsert, PokemonNameInsert } from "@/types/Pokemon"
import Pokedex from "pokedex-promise-v2"
import { type MoveForDb, insertAllPokemonData, insertMovesData } from "./api"
import { findEnglishName, generateNamesArray, generateStats, generateTypes } from "./pokeApi2db"

type PokemonApi = {
  pokemon: Pokedex.Pokemon
  species: Pokedex.PokemonSpecies
}

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

export const preparePokemonAndMoves = async (id: number, end?: number): Promise<void> => {
  const pokemonAndSpeciesData = await getPokemonsFromApi(id, end)
  await insertPokemonToDb(pokemonAndSpeciesData)

  const movesToSave = createMovesArray(pokemonAndSpeciesData)
  console.log(`Found ${movesToSave.length} moves in pokemon data`)

  const movesForDb = await getMovesFromApi(movesToSave)
  console.log(`Fetched ${movesForDb.length} move details from PokeAPI`)

  await insertMovesData(movesForDb)
}

async function getPokemonsFromApi(id: number, end?: number): Promise<PokemonApi[]> {
  const endValue = end ?? id
  const ids = Array.from({ length: endValue - id + 1 }, (_, i) => i + id)
  try {
    const pokedex = await Promise.all(ids.map(getPokemonFromApi))
    pokedex.sort((a, b) => a.pokemon.id - b.pokemon.id)
    console.info(`Fetched ${pokedex.length} pokemon from PokeAPI`)
    return pokedex
  } catch (error) {
    console.error("Failed to fetch pokemon from PokeAPI:", error)
    throw error
  }
}

const getPokemonFromApi = async (id: number): Promise<PokemonApi> => {
  try {
    console.info(`Fetching pokemon ${id}...`)
    const pokemon = await P.getPokemonByName(id)
    const species = await P.getPokemonSpeciesByName(pokemon.species.name)
    return { pokemon, species }
  } catch (error) {
    throw new Error(`Failed to fetch pokemon ${id}`, { cause: error })
  }
}

const insertPokemonToDb = async (allPokemonData: PokemonApi[]): Promise<void> => {
  const pokemons: PokemonInsert[] = []
  const allNames: PokemonNameInsert[] = []

  for (const { pokemon: p, species: s } of allPokemonData) {
    const names = generateNamesArray(s.names)
    const stats = generateStats(p.stats)
    pokemons.push({
      id: p.id,
      name: findEnglishName(names),
      ...stats,
      types: generateTypes(p.types),
      baseExp: p.base_experience,
      height: p.height,
      weight: p.weight,
      captureRate: s.capture_rate,
    })
    names.forEach(n => allNames.push({ ...n, pokemonId: p.id }))
  }

  console.log(`Saving ${pokemons.length} pokemon to db`)
  await insertAllPokemonData(pokemons, allNames)
}

// slightly modified type for initial construction with only the move name known
type MoveFromApi = Omit<MoveForDb, "move"> & {
  move: Omit<Partial<MoveInsert>, "name"> & { name: string }
}

// builds a deduplicated list of all moves to fetch, filtered to the emerald version group
const createMovesArray = (allPokemonData: PokemonApi[]): MoveFromApi[] => {
  const checkForVersions = ["emerald"] as const
  type CheckForVersionsType = (typeof checkForVersions)[number]

  const movesFromApi: MoveFromApi[] = []

  for (const pokemonApi of allPokemonData) {
    for (const moveElement of pokemonApi.pokemon.moves) {
      const existingIndex = movesFromApi.findIndex(m => m.move.name === moveElement.move.name)

      for (const versionDetails of moveElement.version_group_details) {
        const isGen3 =
          checkForVersions.indexOf(versionDetails.version_group.name as CheckForVersionsType) > -1

        if (isGen3) {
          const index =
            existingIndex > -1
              ? existingIndex
              : movesFromApi.push({ move: { name: moveElement.move.name }, pokemonLearnData: [], moveNames: [] }) - 1

          movesFromApi[index]!.pokemonLearnData.push({
            pokemonId: pokemonApi.pokemon.id,
            learnMethod: versionDetails.move_learn_method.name as LearnMethod,
            level: versionDetails.level_learned_at,
            version: versionDetails.version_group.name as VersionGroup,
          })
        }
      }
    }
  }

  return movesFromApi
}

const getMovesFromApi = async (moves: MoveFromApi[]): Promise<MoveForDb[]> =>
  Promise.all(moves.map(getMoveFromApi))

const getMoveFromApi = async (entry: MoveFromApi): Promise<MoveForDb> => {
  const moveInfo = await P.getMoveByName(entry.move.name)
  const moveNames = generateNamesArray(moveInfo.names)
  const type = generateTypes(moveInfo.type)[0]
  if (!type) throw new Error(`Move "${entry.move.name}" has no type in PokeAPI response`)
  return {
    move: {
      name: findEnglishName(moveNames),
      type,
      pp: moveInfo.pp ?? 0,
      priority: moveInfo.priority,
      power: moveInfo.power,
      accuracy: moveInfo.accuracy,
    },
    moveNames,
    pokemonLearnData: entry.pokemonLearnData,
  }
}
