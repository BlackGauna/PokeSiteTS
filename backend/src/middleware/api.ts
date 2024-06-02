import { Move, MoveName, MoveNameType, MoveType } from "@schemas/Move"
import {
  LearnMethod,
  Pokemon,
  PokemonMove,
  PokemonMoveType,
  PokemonName,
  PokemonNameType,
  PokemonType,
} from "@schemas/Pokemon"
import { VersionGroup } from "@schemas/Shared"
import { eq } from "drizzle-orm"
import { db } from "src/db/db"

export const insertNewPokemonData = async (
  pokemon: PokemonType,
  pokemonNames: PokemonNameType[],
) => {
  return await db.transaction(async tx => {
    const pokemonId = (
      await tx.insert(Pokemon).values(pokemon).returning({ id: Pokemon.id })
    )[0].id

    const pokemonNamesWithId = pokemonNames.map(name => ({
      ...name,
      pokemonId: pokemonId,
    }))

    await tx.insert(PokemonName).values(pokemonNamesWithId)

    return pokemonId
  })
}

export type LearnedMove = {
  move: MoveType
  moveNames: MoveNameType[]
  pokemonId: number
  learnMethod: LearnMethod
  level: number
  version: VersionGroup
}

export const insertPokemonMoveData = async (learnedMove: LearnedMove) => {
  return await db.transaction(async tx => {
    const moveId = (
      await tx.insert(Move).values(learnedMove.move).returning({ id: Move.id })
    )[0].id

    const pokemonMove: PokemonMoveType = {
      pokemonId: learnedMove.pokemonId,
      moveId: moveId,
      learnMethod: learnedMove.learnMethod,
      level: learnedMove.level,
      version: learnedMove.version,
    }
    await tx.insert(PokemonMove).values(pokemonMove)

    const moveNamesWithId = learnedMove.moveNames.map(name => ({
      ...name,
      moveId: moveId,
    }))

    await tx.insert(MoveName).values(moveNamesWithId)

    return await tx.query.Pokemon.findFirst({
      where: eq(Pokemon.id, learnedMove.pokemonId),
      with: {
        moves: true,
      },
    })
  })
}
