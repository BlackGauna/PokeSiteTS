import { pgEnum, pgTable, primaryKey, serial, smallint, text } from "drizzle-orm/pg-core"
// import { createInsertSchema } from "drizzle-typebox"
import { NamesTable, PokemonTypes, versionGroups } from "./Shared"
import { relations } from "drizzle-orm"
import { Move } from "./Move"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { Static } from "elysia"

// TODO: add effort value gain when defeated, eg. 1 attack ev
export const Pokemon = pgTable("pokemon", {
  id: smallint("id").primaryKey(),
  name: text("name").notNull().unique(),
  baseExp: smallint("base_experience"),
  height: smallint("height"),
  weight: smallint("weight"),
  hp: smallint("hp").notNull(),
  atk: smallint("atk").notNull(),
  spAtk: smallint("sp_atk").notNull(),
  def: smallint("def").notNull(),
  spDef: smallint("sp_def").notNull(),
  speed: smallint("speed").notNull(),
  type: PokemonTypes("type").notNull(),
  type2: PokemonTypes("type2"),
  captureRate: smallint("capture_rate"),
})

export const PokemonName = pgTable(
  "pokemon_name",
  {
    ...NamesTable,
    id: serial("id").unique(),
    pokemonId: smallint("pokemon_id")
      .references(() => Pokemon.id)
      .notNull(),
  },
  table => ({
    pk: primaryKey({ columns: [table.pokemonId, table.language] }),
  }),
)

export const pokemonRelations = relations(Pokemon, ({ many }) => ({
  names: many(PokemonName),
  moves: many(PokemonMove),
}))

export const pokemonNameRelations = relations(PokemonName, ({ one }) => ({
  pokemon: one(Pokemon, {
    fields: [PokemonName.pokemonId],
    references: [Pokemon.id],
  }),
}))

export const moveLearnMethod = pgEnum("move_learn_method", [
  "level-up",
  "egg",
  "tutor",
  "machine",
  "stadium-surfing-pikachu",
  "light-ball-egg",
  "colosseum-purification",
  "xd-shadow",
  "xd-purification",
  "form-change",
  "zygarde-cube",
])

export type LearnMethod = (typeof moveLearnMethod.enumValues)[number]

export const PokemonMove = pgTable(
  "pokemon_move",
  {
    pokemonId: smallint("pokemon_id")
      .references(() => Pokemon.id)
      .notNull(),
    moveId: smallint("move_id")
      .references(() => Move.id)
      .notNull(),
    learnMethod: moveLearnMethod("learn_method").notNull(),
    level: smallint("level").notNull(),
    version: versionGroups("version").notNull(),
  },
  table => ({
    pk: primaryKey({ columns: [table.pokemonId, table.moveId] }),
  }),
)

export const pokemonMoveRelations = relations(PokemonMove, ({ one }) => ({
  pokemon: one(Pokemon, {
    fields: [PokemonMove.pokemonId],
    references: [Pokemon.id],
  }),
  move: one(Move, {
    fields: [PokemonMove.moveId],
    references: [Move.id],
  }),
}))

// TODO: NOT WORKING ON VS CODE FOR SOME REASON FOR RPC; NEED TO CHECK!!!! ON CLIENT-SIDE ONLY TYPES UNKNOWN SHOWN
export const insertPokemon = createInsertSchema(Pokemon)
export const insertPokemonName = createInsertSchema(PokemonName)
export const insertPokemonMove = createInsertSchema(PokemonMove)

export const selectPokemon = createSelectSchema(Pokemon)
export type SelectPokemonType = Static<typeof selectPokemon>

export type PokemonType = Static<typeof insertPokemon>
export type PokemonNameType = Static<typeof insertPokemonName>
export type PokemonMoveType = Static<typeof insertPokemonMove>

export type PokemonWithNames = PokemonType & { names: PokemonNameType[] }
export type PokemonWithNamesAndMoves = PokemonWithNames & { moves: PokemonMoveType[] }
