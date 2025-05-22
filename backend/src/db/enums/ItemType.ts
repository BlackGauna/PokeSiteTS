import { pgEnum } from "drizzle-orm/pg-core"

export const itemTypeEnum = pgEnum("item-type", ["item", "berry", "ball", "tm", "hm", "base-item"])

export const ItemTypes = itemTypeEnum.enumValues
export type ItemType = (typeof ItemTypes)[number]

export const parseItemType = (input: string): ItemType | null => {
  return ItemTypes.includes(input as ItemType) ? (input as ItemType) : null
}
