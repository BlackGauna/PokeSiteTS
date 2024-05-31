import { pgEnum, serial, text } from "drizzle-orm/pg-core"
export const Languages = pgEnum("languages", [
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
  language: Languages("languages").notNull(),
  name: text("name").notNull(),
}
