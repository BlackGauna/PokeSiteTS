import { Type, type Static } from "@sinclair/typebox"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { itemPlacementsTable, itemsTable } from "../db/schemas/Item"
import { locationSchema } from "./Location"

export const itemSchema = createSelectSchema(itemsTable)
export const itemInsertSchema = createInsertSchema(itemsTable)
export const itemPlacementSchema = createSelectSchema(itemPlacementsTable)
export const itemPlacementInsertSchema = createInsertSchema(itemPlacementsTable)

export const itemPlacementWithItemSchema = Type.Composite([
  itemPlacementSchema,
  Type.Object({ item: itemSchema }),
])

export const itemPlacementWithRelationsSchema = Type.Composite([
  itemPlacementWithItemSchema,
  Type.Object({ location: locationSchema }),
])

export type Item = Static<typeof itemSchema>
export type ItemInsert = Static<typeof itemInsertSchema>
export type ItemPlacement = Static<typeof itemPlacementSchema>
export type ItemPlacementInsert = Static<typeof itemPlacementInsertSchema>
export type ItemPlacementWithItem = Static<typeof itemPlacementWithItemSchema>
export type ItemPlacementWithRelations = Static<typeof itemPlacementWithRelationsSchema>
