import { db } from "@/db/db"
import type { LearnMethod } from "@/db/enums/MoveLearnMethod"
import { moveNameTable, moveTable } from "@/db/schemas/Move"
import { pokemonNameTable, pokemonTable } from "@/db/schemas/Pokemon"
import { pokemonMoveTable } from "@/db/schemas/PokemonMove"
import type { NamesBase, VersionGroup } from "@/db/schemas/Shared"
import type { MoveInsert, MoveNameInsert, PokemonMoveInsert } from "@/server/types/Move"
import type { PokemonInsert, PokemonNameInsert } from "@/server/types/Pokemon"
import {
  buildOnConflictUpdateColumns,
  buildOnConflictUpdateConfig,
} from "@/server/utils/buildOnConflictUpdateColumns"

const BATCH_SIZE = 1000

const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size))
  return chunks
}

export const insertAllPokemonData = async (
  pokemons: PokemonInsert[],
  allNames: PokemonNameInsert[],
): Promise<void> => {
  if (pokemons.length === 0) return
  await db.transaction(async tx => {
    for (const chunk of chunkArray(pokemons, BATCH_SIZE)) {
      await tx
        .insert(pokemonTable)
        .values(chunk)
        .onConflictDoUpdate(buildOnConflictUpdateConfig(pokemonTable))
    }
    for (const chunk of chunkArray(allNames, BATCH_SIZE)) {
      await tx
        .insert(pokemonNameTable)
        .values(chunk)
        .onConflictDoUpdate(buildOnConflictUpdateConfig(pokemonNameTable))
    }
  })
}

type LearnedMove = {
  pokemonId: number
  learnMethod: LearnMethod
  level: number
  version: VersionGroup
}

export type MoveForDb = {
  move: MoveInsert
  pokemonLearnData: LearnedMove[]
  moveNames: NamesBase[]
}

export const insertMovesData = async (movesForDb: MoveForDb[]): Promise<void> => {
  if (movesForDb.length === 0) return
  await db.transaction(async tx => {
    // 1. Batch insert moves in chunks, collect all returned id+name pairs
    const moveValues = movesForDb.map(m => m.move)
    const inserted: { id: number; name: string }[] = []
    for (const chunk of chunkArray(moveValues, BATCH_SIZE)) {
      const rows = await tx
        .insert(moveTable)
        .values(chunk)
        .onConflictDoUpdate({
          target: moveTable.name,
          set: buildOnConflictUpdateColumns(moveTable),
        })
        .returning({ id: moveTable.id, name: moveTable.name })
      inserted.push(...rows)
    }

    // 2. name → id lookup
    const moveIdByName = new Map(inserted.map(m => [m.name, m.id]))

    // 3. Build move name rows
    const allMoveNames: MoveNameInsert[] = movesForDb.flatMap(m => {
      const moveId = moveIdByName.get(m.move.name)
      if (moveId === undefined) throw new Error(`Move "${m.move.name}" not found in returned rows`)
      return m.moveNames.map(n => ({ ...n, moveId }))
    })

    // 4. Batch insert move names
    if (allMoveNames.length > 0) {
      const { target } = buildOnConflictUpdateConfig(moveNameTable)
      for (const chunk of chunkArray(allMoveNames, BATCH_SIZE)) {
        await tx
          .insert(moveNameTable)
          .values(chunk)
          .onConflictDoUpdate({ target, set: buildOnConflictUpdateColumns(moveNameTable) })
      }
    }

    // 5. Build pokemon-move rows
    const allPokemonMoves: PokemonMoveInsert[] = movesForDb.flatMap(m => {
      const moveId = moveIdByName.get(m.move.name)!
      return m.pokemonLearnData.map(ld => ({ ...ld, moveId }))
    })

    // 6. Batch insert pokemon-move associations (most likely to exceed PG param limit)
    if (allPokemonMoves.length > 0) {
      for (const chunk of chunkArray(allPokemonMoves, BATCH_SIZE)) {
        await tx
          .insert(pokemonMoveTable)
          .values(chunk)
          .onConflictDoUpdate(buildOnConflictUpdateConfig(pokemonMoveTable))
      }
    }
  })
}
