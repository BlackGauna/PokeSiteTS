import { pgEnum, pgTable, text } from "drizzle-orm/pg-core"

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

export const NamesTableBase = {
  language: Languages("language").notNull(),
  name: text("name").notNull(),
}
const insertNameTable = pgTable("NOT_USED", { ...NamesTableBase })
export type NamesBaseTableType = typeof insertNameTable.$inferInsert

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
