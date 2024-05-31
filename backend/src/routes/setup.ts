/* eslint-disable @typescript-eslint/no-unused-vars */
import Elysia from "elysia"
import { getPokemonFromApi } from "../middleware/FillPokedex"
import { Type as t } from "@sinclair/typebox"
import { db } from "src/db/db"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-typebox"
import { PokemonName, Pokemon } from "@schemas/Pokemon"

const poop = t.Object({
  id: t.Number(),
  name: t.String(),
})
export const pokemonNameSchema = createInsertSchema(PokemonName)

const type = createInsertSchema(Pokemon)

const setupRoutes = new Elysia()
  .get("/pokedex", () => getPokemonFromApi(1, 2))

  .post(
    "/pokedex",
    async ({ body: { pokemon, names } }) => {
      const newPokemon = await db.transaction(async tx => {
        const pokemonId = (
          await tx.insert(Pokemon).values(pokemon).returning({ id: Pokemon.id })
        )[0].id

        const namesWithId = names.map(name => ({
          ...name,
          pokemonId: pokemonId,
        }))
        await tx.insert(PokemonName).values(namesWithId)

        const pokemonResult = await tx.query.Pokemon.findFirst({
          where: eq(Pokemon.id, pokemonId),
          with: {
            names: true,
          },
        })

        console.log(pokemonResult)
        return pokemonResult
      })

      return newPokemon
      // return await db.insert(Pokemons).values(body).returning()
    },
    {
      body: t.Object({
        pokemon: type,
        names: t.Array(pokemonNameSchema),
      }),
    },
  )

export default setupRoutes
