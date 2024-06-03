import { pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-typebox"
import { Static } from "elysia"

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
  "ja-Hrkt",
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

export type Languages = (typeof Languages.enumValues)[number]

export const NamesTable = {
  language: Languages("language").notNull(),
  name: text("name").notNull(),
}
const insertNameTable = createInsertSchema(pgTable("NOT_USED", { ...NamesTable }))
export type NamesTableType = Static<typeof insertNameTable>

export const VersionGroup = [
  "red-blue",
  "yellow",
  "gold-silver",
  "crystal",
  "ruby-sapphire",
  "emerald",
  "firered-leafgreen",
  "diamond-pearl",
  "platinum",
  "heartgold-soulsilver",
  "black-white",
  "colosseum",
  "xd",
  "black-2-white-2",
  "x-y",
  "omega-ruby-alpha-sapphire",
  "sun-moon",
  "ultra-sun-ultra-moon",
  "lets-go-pikachu-lets-go-eevee",
  "sword-shield",
  "brilliant-diamond-and-shining-pearl",
] as const
export type VersionGroup = (typeof VersionGroup)[number]

export const versionGroups = pgEnum("version_groups", VersionGroup)
