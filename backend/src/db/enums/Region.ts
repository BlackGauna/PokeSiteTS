import { pgEnum } from "drizzle-orm/pg-core"

export const regionsEnum = pgEnum("regions", ["kanto", "johto", "hoenn"])

const regions = regionsEnum.enumValues
export type Region = (typeof regions)[number]

export const parseRegion = (input: string): Region | null => {
  return regions.includes(input as Region) ? (input as Region) : null
}
