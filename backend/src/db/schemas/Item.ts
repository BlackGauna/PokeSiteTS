import { relations } from "drizzle-orm"
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
import { locationTable, type Location } from "./Location"

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

export const itemsRelations = relations(itemsTable, ({ many }) => ({
  placements: many(itemPlacementsTable),
}))

export const itemPlacementsRelations = relations(itemPlacementsTable, ({ one }) => ({
  item: one(itemsTable, {
    fields: [itemPlacementsTable.itemId],
    references: [itemsTable.id],
  }),
  location: one(locationTable, {
    fields: [itemPlacementsTable.locationId],
    references: [locationTable.id],
  }),
}))

export type ItemInsert = typeof itemsTable.$inferInsert
export type Item = typeof itemsTable.$inferSelect

export type ItemPlacementInsert = typeof itemPlacementsTable.$inferInsert
export type ItemPlacement = typeof itemPlacementsTable.$inferSelect
export type ItemPlacementWithItem = ItemPlacement & { item: Item }
export type ItemPlacementWithRelations = ItemPlacement & { item: Item; location: Location }
