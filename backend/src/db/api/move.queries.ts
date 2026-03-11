import { eq } from "drizzle-orm"
import { db } from "../db"
import { pokemonMoveTable } from "../schemas"

export const getAllMoveIdsAndNames = async () => {
  const response = await db.query.moveTable.findMany({
    columns: { id: true, name: true },
  })

  if (!response) throw new Error(`Could not find moves`)

  return response
}

export const getPokemonMoves = async (pokemonId: number) => {
  const response = await db.query.pokemonMoveTable.findMany({
    where: eq(pokemonMoveTable.pokemonId, pokemonId),
    with: {
      move: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  })

  if (!response) throw new Error(`Could not find moves`)

  return response
}
