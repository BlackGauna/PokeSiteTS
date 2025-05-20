import { pgEnum } from "drizzle-orm/pg-core"

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
