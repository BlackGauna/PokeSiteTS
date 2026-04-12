import type { PokemonWithNamesAndMoves } from "@/server/types/Pokemon"
import type { Type } from "../schemas/Shared"
import { ilike } from "drizzle-orm"
import { status } from "elysia"
import { db } from "../db"
import { pokemonTable } from "../schemas/Pokemon"

type StatPercentile = {
  global: number
  byType: Partial<Record<Type, number>>
}

export type PokemonPercentiles = {
  hp: StatPercentile
  atk: StatPercentile
  def: StatPercentile
  spAtk: StatPercentile
  spDef: StatPercentile
  speed: StatPercentile
}

function pct(below: number, total: number): number {
  return total === 0 ? 0 : Math.round((below / total) * 100)
}

export const getPokemonPercentiles = async (
  id: number,
  types: Type[],
): Promise<PokemonPercentiles> => {
  const all = await db.query.pokemonTable.findMany({
    columns: { hp: true, atk: true, def: true, spAtk: true, spDef: true, speed: true, types: true },
  })

  const stats = await db.query.pokemonTable.findFirst({
    where: { id },
    columns: { hp: true, atk: true, def: true, spAtk: true, spDef: true, speed: true },
  })

  if (!stats) throw new Error(`Pokemon ${id} not found`)

  const statKeys = ["hp", "atk", "def", "spAtk", "spDef", "speed"] as const

  const result = {} as PokemonPercentiles

  for (const key of statKeys) {
    const value = stats[key]
    const globalBelow = all.filter(p => p[key] < value).length
    const byType: Partial<Record<Type, number>> = {}

    for (const type of types) {
      const typeRows = all.filter(p => (p.types as Type[]).includes(type))
      const typeBelow = typeRows.filter(p => p[key] < value).length
      byType[type] = pct(typeBelow, typeRows.length)
    }

    result[key] = { global: pct(globalBelow, all.length), byType }
  }

  return result
}

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
