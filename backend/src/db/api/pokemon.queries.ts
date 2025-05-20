import { ilike } from "drizzle-orm"
import { db } from "../db"
import { Pokemon } from "../schemas/Pokemon"

export const getPokemonIdByName = async (name: string) => {
  // extra rule for deoxys
  if (name.includes("deoxys")) name = "deoxys"

  const response = await db.query.Pokemon.findFirst({
    where: ilike(Pokemon.name, name),
    columns: { id: true },
  })

  if (!response) throw new Error(`Could not find pokemon ${name}`)

  return response.id
}
