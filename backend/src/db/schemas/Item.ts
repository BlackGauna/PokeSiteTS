import {
  bigserial,
  boolean,
  integer,
  pgTable,
  serial,
  smallint,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core"
import { itemTypeEnum } from "../enums/ItemType"
import { locationTable } from "./Location"

export const itemsTable = pgTable("items", {
  id: serial().primaryKey(),
  name: text().notNull().unique(),
  // TODO: make notNull and edit import
  type: itemTypeEnum(),
})

export const itemPlacementsTable = pgTable(
  "item_placements",
  {
    id: bigserial({ mode: "number" }).primaryKey(),
    coordinates: integer().array().notNull(),
    amount: smallint().notNull(),
    isHidden: boolean().notNull(),
    itemId: integer()
      .references(() => itemsTable.id, { onDelete: "cascade" })
      .notNull(),
    locationId: integer()
      .references(() => locationTable.id, { onDelete: "cascade" })
      .notNull(),
  },
  table => [uniqueIndex().on(table.coordinates, table.locationId)],
)
