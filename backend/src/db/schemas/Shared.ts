import { pgEnum, serial, text } from "drizzle-orm/pg-core"

export const PokemonTypes = pgEnum("type", [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "stellar",
  "unknown",
])

export type Type = (typeof PokemonTypes.enumValues)[number]

export const Languages = pgEnum("language", [
  "roomaji",
  "ko",
  "zh-Hant",
  "fr",
  "de",
  "es",
  "it",
  "en",
  "cs",
  "ja",
  "zh-Hans",
  "pt-BR",
])

export const NamesTable = {
  id: serial("id").primaryKey(),
  language: Languages("language").notNull(),
  name: text("name").notNull(),
}
