import { sql } from "drizzle-orm"
import { db, type Transaction } from "../db"
import {
  trainerFightPokemonMoveTable,
  trainerFightPokemonTable,
  trainerFightTable,
  trainerTable,
  type TrainerFightInsertAllInfo,
  type TrainerFightPokemonInsertWithMoves,
  type TrainerFightPokemonMoveInsert,
  type TrainerInsert,
  type TrainerInsertAllInfo,
} from "../schemas"

export const saveTrainersAndFights = async (data: TrainerInsertAllInfo[]) => {
  console.log("beginning save trainers")

  await db.transaction(async (tx: Transaction) => {
    const savedTrainers = await tx
      .insert(trainerTable)
      .values(data as TrainerInsert[])
      .onConflictDoUpdate({
        target: trainerTable.name,
        set: { class: sql`excluded.class` },
      })
      .returning({ id: trainerTable.id, name: trainerTable.name })

    console.log("saved trainers")

    const trainerFights = data.flatMap(el =>
      el.fights.map(fight => {
        fight.trainerId = savedTrainers.find(trainer => trainer.name === el.name)!.id
        return fight
      }),
    )

    for (const fight of trainerFights) {
      console.log("save fight")

      await saveTrainerFight(fight, tx)
    }
  })
}

const saveTrainerFight = async (data: TrainerFightInsertAllInfo, tx: Transaction) => {
  const id = await tx
    .insert(trainerFightTable)
    .values(data)
    .onConflictDoUpdate({
      target: [
        trainerFightTable.trainerId,
        trainerFightTable.locationId,
        trainerFightTable.matchNumber,
        trainerFightTable.starterPokemonId,
      ],
      set: { calcAsDoubleBattle: sql`excluded."calcAsDoubleBattle"` },
    })
    .returning({ id: trainerFightTable.id })

  if (!id[0]) throw new Error("error while saving trainer fight")
  data.id = id[0].id
  console.log("saved fight")

  for (const pokemon of data.pokemons) {
    await saveFightPokemon(pokemon, id[0].id, tx)
  }
}

const saveFightPokemon = async (
  data: TrainerFightPokemonInsertWithMoves,
  fightId: number,
  tx: Transaction,
) => {
  const fightPokemonId = await tx
    .insert(trainerFightPokemonTable)
    .values({ ...data, trainerFightId: fightId })
    .returning({ id: trainerFightPokemonTable.id })

  if (!fightPokemonId[0]) throw new Error("error while saving trainer fight pokemon")

  const insertMoves: TrainerFightPokemonMoveInsert[] = data.moves.map(move => ({
    moveId: move,
    fightPokemonId: fightPokemonId[0]!.id,
  }))

  await tx.insert(trainerFightPokemonMoveTable).values(insertMoves)
}
