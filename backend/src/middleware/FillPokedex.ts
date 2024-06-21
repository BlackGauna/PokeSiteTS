import Pokedex from "pokedex-promise-v2"
import { LearnMethod, PokemonType } from "@schemas/Pokemon"
import {
  findEnglishName,
  generateNamesArray,
  generateStats,
  generateTypes,
} from "src/utils/pokeApi2db"
import { MoveType } from "@schemas/Move"
import { MoveForDb, insertMovesData, insertNewPokemonData } from "./api"
import { VersionGroup } from "@schemas/Shared"
import { delay } from "src/utils/general"

type PokemonApi = {
  pokemon: Pokedex.Pokemon
  species: Pokedex.PokemonSpecies
}

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

export const preparePokemonAndMoves = async (id: number, end?: number) => {
  const pokemonAndSpeciesData = await getPokemonFromApi(id, end)
  await insertPokemonToDb(pokemonAndSpeciesData)

  // moves
  const movesToSave = createMovesArray(pokemonAndSpeciesData)
  // writeToTestFile({ test: movesToSave })

  const movestoSaveDbType = await getMovesFromApi(movesToSave)
  await insertMovesToDb(movestoSaveDbType)
}

// TODO: maybe insert a db query call to check if pokemon is already in db. If yes, skip that one.
// and also maybe implement an update function for fixing borked data inside db, eg. via a "force" boolean param
async function getPokemonFromApi(id: number, end?: number) {
  const endValue = end ? end : id
  const ids = [...Array(endValue - id + 1).keys()].map(x => x + id)
  const pokedex: PokemonApi[] = []
  try {
    for (const id of ids) {
      // Grouping does not work currently in bun, so have add manual indentation inside group
      console.group(`Getting pokemon with id: ${id}`)

      try {
        console.info("  Getting pokemon info...")
        const pokemon = await P.getPokemonByName(id)

        console.info("  Getting species info...")
        const species = await P.getPokemonSpeciesByName(pokemon.species.name)

        pokedex.push({ pokemon, species })
      } catch (error) {
        console.error(error)
        throw error
      }

      console.groupEnd()
    }
  } catch (error) {
    console.error("An error occured while getting data from pokeapi")

    console.log(error)

    throw error
  }

  pokedex.sort((a, b) => {
    return a.pokemon.id - b.pokemon.id
  })
  console.info("got all pokemon and species info")
  return pokedex
}

const insertPokemonToDb = async (allPokemonData: PokemonApi[]) => {
  const pokemonDbIds: number[] = []

  for (const pokemonApiElement of allPokemonData) {
    const pokemonApiData = pokemonApiElement.pokemon
    const speciesApiData = pokemonApiElement.species

    const pokemonNamesDb = generateNamesArray(speciesApiData.names)
    const stats = generateStats(pokemonApiData.stats)
    const types = generateTypes(pokemonApiData.types)

    const pokemonDb: PokemonType = {
      id: pokemonApiData.id,
      name: findEnglishName(pokemonNamesDb),
      hp: stats.hp,
      atk: stats.atk,
      spAtk: stats.spAtk,
      def: stats.def,
      spDef: stats.spDef,
      speed: stats.speed,
      type: types.type,
      type2: types.type2,
    }
    console.log(`saving pokemon ${pokemonDb.name} to db`)

    const id = await insertNewPokemonData(pokemonDb, pokemonNamesDb)
    pokemonDbIds.push(id)
  }
  return pokemonDbIds
}

// slightly modified type for initial generation with only the name of the move
type MoveFromApi = Omit<MoveForDb, "move"> & {
  move: Omit<Partial<MoveType>, "name"> & { name: string }
}

// creates an array of all moves to get from the api and save inside the db
const createMovesArray = (allPokemonData: PokemonApi[]) => {
  const checkForVersions = ["emerald"] as const
  type CheckForVersionsType = (typeof checkForVersions)[number]

  const movesFromApi: MoveFromApi[] = []

  for (const pokemonApi of allPokemonData) {
    for (const moveElement of pokemonApi.pokemon.moves) {
      const moveAldreadyIndex = movesFromApi.findIndex(
        element => moveElement.move.name === element.move.name,
      )

      for (const versionDetails of moveElement.version_group_details) {
        const isGen3 =
          checkForVersions.indexOf(versionDetails.version_group.name as CheckForVersionsType) > -1

        if (isGen3) {
          const index =
            moveAldreadyIndex > -1
              ? moveAldreadyIndex
              : movesFromApi.push({
                  move: { name: moveElement.move.name },
                  pokemonLearnData: [],
                  moveNames: [],
                }) - 1

          movesFromApi[index].pokemonLearnData.push({
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

const getMovesFromApi = async (movesForDb: MoveFromApi[]) => {
  for (const moveforDbElement of movesForDb) {
    await delay(1500)
    console.log(`Getting move ${moveforDbElement.move.name} from api`)
    const moveInfo = await P.getMoveByName(moveforDbElement.move.name)
    const mainName = (moveforDbElement.moveNames = generateNamesArray(moveInfo.names))

    const move: MoveType = {
      type: generateTypes(moveInfo.type).type,
      name: findEnglishName(mainName),
      pp: moveInfo.pp ? moveInfo.pp : 0,
      priority: moveInfo.priority,
    }
    moveforDbElement.move = move
  }
  return movesForDb as MoveForDb[]
}

const insertMovesToDb = async (movesForDb: MoveForDb[]) => await insertMovesData(movesForDb)
