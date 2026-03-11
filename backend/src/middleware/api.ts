import type { LearnMethod } from "@/db/enums/MoveLearnMethod"
import { type MoveNameType, type MoveType, moveNameTable, moveTable } from "@/db/schemas/Move"
import { type Pokemon, pokemonNameTable, pokemonTable } from "@/db/schemas/Pokemon"
import { type PokemonMove, pokemonMoveTable } from "@/db/schemas/PokemonMove"
import type { NamesBaseTableType, VersionGroup } from "@/db/schemas/Shared"
import { db } from "src/db/db"

// TODO: add try catch blocks for queries
export const insertNewPokemonData = async (
  pokemon: Pokemon,
  pokemonNames: NamesBaseTableType[],
) => {
  return await db.transaction(async tx => {
    const pokemonId = (
      await tx
        .insert(pokemonTable)
        .values(pokemon)
        .onConflictDoUpdate({ target: pokemonTable.id, set: { ...pokemon } })
        .returning({ id: pokemonTable.id })
    )[0]?.id

    if (!pokemonId) throw new Error("Pokemon id is undefined")

    const pokemonNamesWithId = pokemonNames.map(name => ({
      ...name,
      pokemonId: pokemonId,
    }))

    await tx.insert(pokemonNameTable).values(pokemonNamesWithId).onConflictDoNothing()

    return pokemonId
  })
}

type LearnedMove = {
  pokemonId: number
  learnMethod: LearnMethod
  level: number
  version: VersionGroup
}
export type MoveForDb = {
  move: MoveType
  pokemonLearnData: LearnedMove[]
  moveNames: NamesBaseTableType[]
}

export const insertMovesData = async (movesForDb: MoveForDb[]) => {
  await db.transaction(async tx => {
    for (const moveforDbElement of movesForDb) {
      // console.log(`  inserting move ${moveforDbElement.move.name}`)

      const moveId = (
        await tx
          .insert(moveTable)
          .values(moveforDbElement.move)
          .onConflictDoUpdate({
            target: moveTable.name,
            set: { ...moveforDbElement.move },
          })
          .returning({ id: moveTable.id })
      )[0]?.id

      // TODO: error handling
      if (!moveId) continue

      const names: MoveNameType[] = moveforDbElement.moveNames.map(nameElement => ({
        ...nameElement,
        moveId: moveId,
      }))

      await tx.insert(moveNameTable).values(names).onConflictDoNothing()

      const pokemonMoveData = moveforDbElement.pokemonLearnData.map(pokemonData => {
        const pokemonMove: PokemonMove = {
          ...pokemonData,
          moveId: moveId,
        }
        return pokemonMove
      })

      await tx.insert(pokemonMoveTable).values(pokemonMoveData).onConflictDoNothing()
    }
  })
}
