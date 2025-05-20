import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"
import { createSelectSchema } from "drizzle-typebox"

// import { pgTrainerClass } from "../enums/TrainerClass"

// TODO: finish
const Trainer = pgTable("trainers", {
  id: serial().primaryKey(),
  name: text().notNull(),
  // class: pgTrainerClass(),
})

// TODO: finish
const TrainerParty = pgTable("trainer_parties", {
  id: serial().primaryKey(),
  rematchNumber: integer(),

  trainerId: integer()
    .references(() => Trainer.id, { onDelete: "cascade" })
    .notNull(),
})

export const TrainerInsert = createSelectSchema(Trainer)
