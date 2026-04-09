import type { PokemonWithNamesAndMoves } from "@/types/Pokemon"
import { ilike } from "drizzle-orm"
import { status } from "elysia"
import { db } from "../db"
import { pokemonTable } from "../schemas/Pokemon"

export const getPokemonIdByName = async (name: string) => {
  // extra rule for deoxys
  if (name.includes("deoxys")) name = "deoxys"

  const [row] = await db
    .select({ id: pokemonTable.id })
    .from(pokemonTable)
    .where(ilike(pokemonTable.name, name))
    .limit(1)

  if (!row) throw new Error(`Could not find pokemon ${name}`)

  return row.id
}

export const getPokemonWithMoves = async (name: string) => {
  try {
    const [row] = await db
      .select({ id: pokemonTable.id })
      .from(pokemonTable)
      .where(ilike(pokemonTable.name, name))
      .limit(1)

    if (!row) return undefined

    const response = await db.query.pokemonTable.findFirst({
      where: { id: row.id },
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

export const getAllPokemon = async (): Promise<PokemonWithNamesAndMoves[]> => {
  const result = await db.query.pokemonTable.findMany({
    with: { moves: { with: { move: true } }, names: true },
  })

  return result as unknown as PokemonWithNamesAndMoves[]
}

export const getPokemonByIdOrName = async (idOrName: number | string) => {
  try {
    if (typeof idOrName === "number") {
      const result = await db.query.pokemonTable.findFirst({
        where: { id: idOrName },
        with: { names: true, moves: { with: { move: true } } },
      })

      if (!result) {
        return status(404, "Pokemon not found")
      }

      return [result] as unknown as PokemonWithNamesAndMoves[]
    } else {
      const [row] = await db
        .select({ id: pokemonTable.id })
        .from(pokemonTable)
        .where(ilike(pokemonTable.name, idOrName))
        .limit(1)

      const result = row
        ? await db.query.pokemonTable.findFirst({
            where: { id: row.id },
            with: { names: true, moves: { with: { move: true } } },
          })
        : undefined

      if (!result) {
        return status(404, "Pokemon not found")
      }

      return [result] as unknown as PokemonWithNamesAndMoves[]
    }
  } catch (error) {
    throw console.error(error)
  }
}
