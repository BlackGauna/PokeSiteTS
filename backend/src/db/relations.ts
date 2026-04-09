import { defineRelations } from "drizzle-orm"
import { itemsTable, itemPlacementsTable } from "./schemas/Item"
import { locationTable, locationEncounterTable } from "./schemas/Location"
import { moveTable, moveNameTable } from "./schemas/Move"
import { pokemonTable, pokemonNameTable } from "./schemas/Pokemon"
import { pokemonMoveTable } from "./schemas/PokemonMove"
import {
  trainerTable,
  trainerFightTable,
  trainerFightPokemonTable,
  trainerFightPokemonMoveTable,
} from "./schemas/Trainer"

export const allRelations = defineRelations(
  {
    pokemonTable,
    pokemonNameTable,
    pokemonMoveTable,
    moveTable,
    moveNameTable,
    locationTable,
    locationEncounterTable,
    itemsTable,
    itemPlacementsTable,
    trainerTable,
    trainerFightTable,
    trainerFightPokemonTable,
    trainerFightPokemonMoveTable,
  },
  (r) => ({
    pokemonTable: {
      names: r.many.pokemonNameTable(),
      moves: r.many.pokemonMoveTable(),
      encounters: r.many.locationEncounterTable(),
    },
    pokemonNameTable: {
      pokemon: r.one.pokemonTable({
        from: r.pokemonNameTable.pokemonId,
        to: r.pokemonTable.id,
      }),
    },
    pokemonMoveTable: {
      pokemon: r.one.pokemonTable({
        from: r.pokemonMoveTable.pokemonId,
        to: r.pokemonTable.id,
      }),
      move: r.one.moveTable({
        from: r.pokemonMoveTable.moveId,
        to: r.moveTable.id,
      }),
    },
    moveTable: {
      names: r.many.moveNameTable(),
      pokemon: r.many.pokemonMoveTable(),
      trainerPokemonMoves: r.many.trainerFightPokemonMoveTable(),
    },
    moveNameTable: {
      move: r.one.moveTable({
        from: r.moveNameTable.moveId,
        to: r.moveTable.id,
      }),
    },
    locationTable: {
      encounters: r.many.locationEncounterTable(),
      items: r.many.itemPlacementsTable(),
    },
    locationEncounterTable: {
      location: r.one.locationTable({
        from: r.locationEncounterTable.locationId,
        to: r.locationTable.id,
      }),
      pokemon: r.one.pokemonTable({
        from: r.locationEncounterTable.pokemonId,
        to: r.pokemonTable.id,
      }),
    },
    itemsTable: {
      placements: r.many.itemPlacementsTable(),
    },
    itemPlacementsTable: {
      item: r.one.itemsTable({
        from: r.itemPlacementsTable.itemId,
        to: r.itemsTable.id,
      }),
      location: r.one.locationTable({
        from: r.itemPlacementsTable.locationId,
        to: r.locationTable.id,
      }),
    },
    trainerTable: {
      fights: r.many.trainerFightTable(),
    },
    trainerFightTable: {
      trainer: r.one.trainerTable({
        from: r.trainerFightTable.trainerId,
        to: r.trainerTable.id,
      }),
      fightPokemon: r.many.trainerFightPokemonTable(),
      location: r.one.locationTable({
        from: r.trainerFightTable.locationId,
        to: r.locationTable.id,
      }),
    },
    trainerFightPokemonTable: {
      trainerFight: r.one.trainerFightTable({
        from: r.trainerFightPokemonTable.trainerFightId,
        to: r.trainerFightTable.id,
      }),
      pokemon: r.one.pokemonTable({
        from: r.trainerFightPokemonTable.pokemonId,
        to: r.pokemonTable.id,
      }),
      moves: r.many.trainerFightPokemonMoveTable(),
    },
    trainerFightPokemonMoveTable: {
      trainerFightPokemon: r.one.trainerFightPokemonTable({
        from: r.trainerFightPokemonMoveTable.fightPokemonId,
        to: r.trainerFightPokemonTable.id,
      }),
      move: r.one.moveTable({
        from: r.trainerFightPokemonMoveTable.moveId,
        to: r.moveTable.id,
      }),
    },
  }),
)
