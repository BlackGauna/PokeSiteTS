/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios"
import Pokedex from "pokedex-promise-v2"
import { PokemonType } from "@schemas/Pokemon"
import {
  findEnglishName,
  generateNamesArray,
  generateStats,
  generateTypes,
} from "src/utils/api2db"

type PokemonApi = {
  pokemon: Pokedex.Pokemon
  species: Pokedex.PokemonSpecies
}

const P = new Pokedex()

export async function getPokemonFromApi(id: number, end?: number) {
  if (end) {
    const ids = [...Array(end - id + 1).keys()].map(x => x + id)

    // TODO: maybe simplify by calling method with array of ids, see library info
    const pokedex: PokemonApi[] = []
    try {
      for (const id of ids) {
        // Grouping does not work currently in bun, so have add manual indentation inside group
        console.group(`Getting pokemon with id: ${id}`)

        console.info("  Getting pokemon info...")
        const pokemon = await P.getPokemonByName(id)
        console.info("  Getting species info...")
        const species = await P.getPokemonSpeciesByName(pokemon.species.name)

        pokedex.push({ pokemon, species })
        console.groupEnd()
      }
    } catch (error) {
      console.error("An error occured while getting data from pokeapi")

      if (error instanceof AxiosError) {
        console.log(error.toJSON())

        throw error.toJSON()
      } else throw error
    }
    console.info("got all pokemon, sending to client")

    pokedex.sort((a, b) => {
      return a.pokemon.id - b.pokemon.id
    })

    // return pokedex.length > 1 ? pokedex : pokedex[0]

    const cleanPokedex = await preparePokemonData(pokedex)
    return cleanPokedex
  }
}

async function preparePokemonData(pokemonsApi: PokemonApi[]) {
  const pokemonsDbArray: PokemonType[] = []

  for (const pokemonApiElement of pokemonsApi) {
    const pokemonApiData = pokemonApiElement.pokemon
    const speciesApiData = pokemonApiElement.species

    const namesDb = generateNamesArray(speciesApiData.names, pokemonApiData.id)
    const stats = generateStats(pokemonApiData.stats)
    const types = generateTypes(pokemonApiData.types)

    const pokemonDb: PokemonType = {
      id: pokemonApiData.id,
      name: findEnglishName(namesDb),
      hp: stats.hp,
      atk: stats.atk,
      spAtk: stats.spAtk,
      def: stats.def,
      spDef: stats.spDef,
      speed: stats.speed,
      type: types.type,
      type2: types.type2,
    }

    pokemonsDbArray.push(pokemonDb)
  }

  return pokemonsDbArray
}
