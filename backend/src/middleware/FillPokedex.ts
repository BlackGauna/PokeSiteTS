import { AxiosError } from "axios"
import Pokedex from "pokedex-promise-v2"
const P = new Pokedex()

export async function getPokemonFromApi(id: number, end?: number) {
  if (end) {
    const ids = [...Array(end - id + 1).keys()].map(x => x + id)

    // TODO: maybe simplify by calling method with array of ids, see library info
    const pokedex: Pokedex.Pokemon[] = []
    try {
      await Promise.all(
        ids.map(async id => {
          const pokemon = await P.getPokemonByName(id)
          console.log(pokemon?.name)
          pokedex.push(pokemon)
        }),
      )

      // const pokemonTest = await P.getPokemonByName(1)

      // pokedex.push(pokemonTest)
    } catch (error) {
      console.error("An error occured while getting data from pokeapi")

      if (error instanceof AxiosError) {
        console.log(error.toJSON())

        throw error.toJSON()
      } else throw error
    }
    console.log("got all pokemon, sending to client")

    pokedex.sort((a, b) => {
      return a.id - b.id
    })
    return pokedex
  } else {
    let pokemon: Pokedex.Pokemon

    try {
      pokemon = await P.getPokemonByName(id)
    } catch (error) {
      console.error("An error occured while getting data from pokeapi")

      if (error instanceof AxiosError) {
        console.log(error.toJSON())

        throw error.toJSON()
      } else throw error
    }
    return pokemon
  }
}
