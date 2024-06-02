/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios"
import Pokedex from "pokedex-promise-v2"
import { LearnMethod, PokemonMoveType, PokemonType } from "@schemas/Pokemon"
import {
  findEnglishName,
  generateNamesArray,
  generateStats,
  generateTypes,
} from "src/utils/pokeApi2db"
import { MoveType } from "@schemas/Move"
import { LearnedMove, insertNewPokemonData, insertPokemonMoveData } from "./api"
import { RATTATA, RATTATA_SPECIES } from "src/tests/testPokemon"
import { VersionGroup } from "@schemas/Shared"

type PokemonApi = {
  pokemon: Pokedex.Pokemon
  species: Pokedex.PokemonSpecies
}

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

export async function getPokemonFromApi(id: number, end?: number) {
  if (end) {
    const ids = [...Array(end - id + 1).keys()].map(x => x + id)

    // TODO: maybe simplify by calling method with array of ids, see library info
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

      if (error instanceof AxiosError) {
        console.log(error.toJSON())

        throw error.toJSON()
      } else throw error
    }

    pokedex.sort((a, b) => {
      return a.pokemon.id - b.pokemon.id
    })

    // return pokedex.length > 1 ? pokedex : pokedex[0]

    console.info("got all pokemon, preparing...")
    const cleanPokedex = await preparePokemonData(pokedex)

    console.info("sending pokemon data to db")
    return cleanPokedex
  }
}

async function preparePokemonData(pokemonsApi: PokemonApi[]) {
  const pokemonsDbArray: PokemonType[] = []
  const movesArray: unknown = []

  for (const pokemonApiElement of pokemonsApi) {
    const pokemonApiData = pokemonApiElement.pokemon
    const speciesApiData = pokemonApiElement.species

    const pokemonNamesDb = generateNamesArray(
      speciesApiData.names,
      pokemonApiData.id,
    )
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

    const pokemonId = await insertNewPokemonData(pokemonDb, pokemonNamesDb)
    console.info("  Getting moves info...")
    const moves = await getPokemonMoves(pokemonApiData.moves, pokemonId)

    // pokemonsDbArray.push(pokemonDb)
    // movesArray.push(moves)
  }

  return { pokemonsDbArray, movesArray }
}

const getPokemonMoves = async (
  movesElementArray: Pokedex.MoveElement[],
  pokemonId: number,
) => {
  const versionGroups = ["ruby-sapphire", "emerald"] as const
  type versionGroups = (typeof versionGroups)[number]

  const movesDbArray: MoveType[] = []

  // TODO: combine both for loops for optimization
  const filteredByVersion = movesElementArray.filter(async moveElement => {
    for (const versionDetails of moveElement.version_group_details) {
      return (
        versionGroups.indexOf(
          versionDetails.version_group.name as versionGroups,
        ) !== -1
      )
    }
  })

  // const path = "@tests/json.json"
  // await Bun.write(path, JSON.stringify(filteredByVersion))

  for (const moveElement of filteredByVersion) {
    const pokemonLearnedMovesDbArray = []
    const moveApi = await P.getMoveByName(moveElement.move.name)

    const moveDb = await prepareMove(moveApi)

    for (const learnMethodPerVersion of moveElement.version_group_details) {
      const moveForDb: LearnedMove = {
        move: moveDb,
        moveNames: [],
        pokemonId: pokemonId,
        learnMethod: learnMethodPerVersion.move_learn_method
          .name as LearnMethod,
        level: learnMethodPerVersion.level_learned_at,
        version: learnMethodPerVersion.version_group.name as VersionGroup,
      }
      const result = insertPokemonMoveData(moveForDb)
      const path = "@tests/json.json"
      await Bun.write(path, JSON.stringify(result))
      // pokemonLearnedMovesDbArray.push(moveForDb)
    }
  }

  return movesDbArray
}

const prepareMove = async (moveApi: Pokedex.Move) => {
  const moveDb: MoveType = {
    type: generateTypes(moveApi.type).type,
    power: moveApi.power,
    accuracy: moveApi.accuracy,
    pp: moveApi.pp!,
    priority: moveApi.priority,
  }
  return moveDb
}

const prepareMoves = (movesApiArray: Pokedex.Move[]) => {
  const movesDbArray: MoveType[] = []

  for (const moveApi of movesApiArray) {
    movesDbArray.push({
      type: generateTypes(moveApi.type).type,
      power: moveApi.power,
      accuracy: moveApi.accuracy,
      pp: moveApi.pp!,
      priority: moveApi.priority,
    })
  }
}

export const testGetPokemonFromApi = () => {
  preparePokemonData([
    {
      pokemon: RATTATA,
      species: RATTATA_SPECIES,
    },
  ])
}
