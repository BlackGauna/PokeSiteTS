import { pgEnum } from "drizzle-orm/pg-core"

export const itemTypeEnum = pgEnum("item-type", ["item", "berry", "ball", "tm", "hm", "base-item"])

const itemTypes = itemTypeEnum.enumValues
export type ItemType = (typeof itemTypes)[number]

export const parseItemType = (input: string): ItemType | null => {
  return itemTypes.includes(input as ItemType) ? (input as ItemType) : null
}
