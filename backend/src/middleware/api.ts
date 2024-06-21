import { Move, MoveName, MoveNameType, MoveType } from "@schemas/Move"
import {
  LearnMethod,
  Pokemon,
  PokemonMove,
  PokemonMoveType,
  PokemonName,
  PokemonType,
} from "@schemas/Pokemon"
import { NamesTableType, VersionGroup } from "@schemas/Shared"
import { eq } from "drizzle-orm"
import { db } from "src/db/db"

// TODO: add try catch blocks for queries
export const insertNewPokemonData = async (
  pokemon: PokemonType,
  pokemonNames: NamesTableType[],
) => {
  return await db.transaction(async tx => {
    const pokemonId = (
      await tx
        .insert(Pokemon)
        .values(pokemon)
        .onConflictDoUpdate({ target: Pokemon.id, set: { ...pokemon } })
        .returning({ id: Pokemon.id })
    )[0].id

    const pokemonNamesWithId = pokemonNames.map(name => ({
      ...name,
      pokemonId: pokemonId,
    }))

    await tx.insert(PokemonName).values(pokemonNamesWithId).onConflictDoNothing()

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
  moveNames: NamesTableType[]
}

export const insertMovesData = async (movesForDb: MoveForDb[]) => {
  console.log("Inserting moves to db")

  for (const moveforDbElement of movesForDb) {
    console.log(`  inserting move ${moveforDbElement.move.name}`)

    await db.transaction(async tx => {
      let moveId: number | undefined = (
        await tx.query.Move.findFirst({
          where: eq(Move.name, moveforDbElement.move.name!),
          columns: {
            id: true,
          },
        })
      )?.id

      if (typeof moveId === "undefined") {
        moveId = (
          await tx
            .insert(Move)
            .values(moveforDbElement.move)
            .onConflictDoNothing()
            .returning({ id: Move.id })
        )[0].id
      }

      const names: MoveNameType[] = moveforDbElement.moveNames.map(nameElement => ({
        ...nameElement,
        moveId: moveId,
      }))

      await tx.insert(MoveName).values(names).onConflictDoNothing()

      const pokemonMoveData = moveforDbElement.pokemonLearnData.map(pokemonData => {
        const pokemonMove: PokemonMoveType = {
          ...pokemonData,
          moveId: moveId,
        }
        return pokemonMove
      })

      await tx.insert(PokemonMove).values(pokemonMoveData).onConflictDoNothing()
    })
  }
}
