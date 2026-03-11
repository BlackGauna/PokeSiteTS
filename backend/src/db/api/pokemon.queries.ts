import { ilike } from "drizzle-orm"
import { db } from "../db"
import { pokemonTable } from "../schemas/Pokemon"

export const getPokemonIdByName = async (name: string) => {
  // extra rule for deoxys
  if (name.includes("deoxys")) name = "deoxys"

  const response = await db.query.pokemonTable.findFirst({
    where: ilike(pokemonTable.name, name),
    columns: { id: true },
  })

  if (!response) throw new Error(`Could not find pokemon ${name}`)

  return response.id
}

export const getPokemonWithMoves = async (name: string) => {
  try {
    const response = await db.query.pokemonTable.findFirst({
      where: ilike(pokemonTable.name, name),
      with: {
        moves: {
          with: {
            move: true,
          },
        },
      },
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getAllPokemonIdsAndNames = async () => {
  const response = await db.query.pokemonTable.findMany({
    columns: { id: true, name: true },
  })

  if (!response) throw new Error(`Could not find pokemon`)

  return response
}
