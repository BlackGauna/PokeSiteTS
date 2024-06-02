import { pgEnum, pgTable, smallint, text } from "drizzle-orm/pg-core"
// import { createInsertSchema } from "drizzle-typebox"
import { NamesTable, PokemonTypes, versionGroups } from "./Shared"
import { relations } from "drizzle-orm"
import { Move } from "./Move"
import { createInsertSchema } from "drizzle-typebox"
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

export const PokemonName = pgTable("pokemon_name", {
  ...NamesTable,
  pokemonId: smallint("pokemon_id")
    .references(() => Pokemon.id)
    .notNull(),
})

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

export const PokemonMove = pgTable("pokemon_move", {
  pokemonId: smallint("pokemon_id")
    .references(() => Pokemon.id)
    .notNull(),
  moveId: smallint("move_id")
    .references(() => Move.id)
    .notNull(),
  learnMethod: moveLearnMethod("learn_method").notNull(),
  level: smallint("level").notNull(),
  version: versionGroups("version").notNull(),
})

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

export type PokemonType = Static<typeof insertPokemon>
export type PokemonNameType = Static<typeof insertPokemonName>
export type PokemonMoveType = Static<typeof insertPokemonMove>
