import { Move, MoveName, MoveType } from "@schemas/Move"
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

export type LearnedMove = {
  move: MoveType
  moveNames: NamesTableType[]
  pokemonId: number
  learnMethod: LearnMethod
  level: number
  version: VersionGroup
}

// TODO: refactor into two separate functions for Moves and PokemonMoves
export const insertPokemonMoveData = async (learnedMove: LearnedMove) => {
  return await db.transaction(async tx => {
    let moveId = (
      await tx.query.Move.findFirst({
        where: eq(Move.name, learnedMove.move.name),
        columns: {
          id: true,
        },
      })
    )?.id

    if (typeof moveId !== "number") {
      moveId = (
        await tx
          .insert(Move)
          .values(learnedMove.move)
          .returning({ id: Move.id })
          .onConflictDoNothing()
      )[0].id

      const moveNamesWithId = learnedMove.moveNames.map(name => ({
        ...name,
        moveId: moveId!,
      }))

      await tx.insert(MoveName).values(moveNamesWithId).onConflictDoNothing()
    }

    const pokemonMove: PokemonMoveType = {
      pokemonId: learnedMove.pokemonId,
      moveId: moveId,
      learnMethod: learnedMove.learnMethod,
      level: learnedMove.level,
      version: learnedMove.version,
    }
    await tx.insert(PokemonMove).values(pokemonMove).onConflictDoNothing()

    return moveId
  })
}
