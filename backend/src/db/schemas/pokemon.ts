import { pgEnum, pgTable, smallint, text } from "drizzle-orm/pg-core"
// import { createInsertSchema } from "drizzle-typebox"
import { NamesTable, PokemonTypes } from "./Shared"
import { relations } from "drizzle-orm"
import { Move } from "./Move"

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
  moves: many(PokemonMoves),
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

export const PokemonMoves = pgTable("pokemon_moves", {
  pokemonId: smallint("pokemon_id")
    .references(() => Pokemon.id)
    .notNull(),
  moveId: smallint("move_id")
    .references(() => Move.id)
    .notNull(),
  learnMethod: moveLearnMethod("learn_method").notNull(),
  level: smallint("level").notNull().default(0),
})

// TODO: NOT WORKING ON VS CODE FOR SOME REASON; NEED TO CHECK!!!! ON CLIENT-SIDE ONLY TYPES UNKNOWN
// export const insertPokemon = createInsertSchema(Pokemons)
// export const insertPokemonName = createInsertSchema(PokemonNames)
