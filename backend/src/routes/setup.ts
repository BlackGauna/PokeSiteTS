/* eslint-disable @typescript-eslint/no-unused-vars */
import Elysia from "elysia"
import { getPokemonFromApi } from "../middleware/FillPokedex"
import { Type as t } from "@sinclair/typebox"
import { PokemonNames, Pokemons, insertPokemonName } from "@schemas/pokemon"
import { db } from "src/db/db"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-typebox"
import { Hono } from "hono"
import { tbValidator } from "@hono/typebox-validator"
import { zValidator } from "@hono/zod-validator"

const insertPokemon = t.Object({
  id: t.Number(),
  name: t.String(),
})

const type = createInsertSchema(Pokemons)

const setupRoutes = new Elysia()
  .get("/pokedex", () => getPokemonFromApi(1, 2))

  .post(
    "/pokedex",
    async ({ body: { pokemon, names } }) => {
      const newPokemon = await db.transaction(async tx => {
        const pokemonId = (
          await tx
            .insert(Pokemons)
            .values(pokemon)
            .returning({ id: Pokemons.id })
        )[0].id

        const namesWithId = names.map(name => ({
          ...name,
          pokemonId: pokemonId,
        }))
        await tx.insert(PokemonNames).values(namesWithId)

        const pokemonResult = await tx.query.Pokemons.findFirst({
          where: eq(Pokemons.id, pokemonId),
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
        pokemon: insertPokemon,
        names: t.Array(insertPokemonName),
      }),
    },
  )

// const setupRoutes = new Hono()
//   .get("/pokedex", c => c.json(getPokemonFromApi(1, 2)))

//   .post("/pokedex", zValidator("json", type), async c => {
//     const pokemon = await c.req.valid("json")
//     const newPokemon = await db.transaction(async tx => {
//       const pokemonId = (
//         await tx.insert(Pokemons).values(pokemon).returning({ id: Pokemons.id })
//       )[0].id

//       const namesWithId = names.map(name => ({
//         ...name,
//         pokemonId: pokemonId,
//       }))
//       await tx.insert(PokemonNames).values(namesWithId)

//       const pokemonResult = await tx.query.Pokemons.findFirst({
//         where: eq(Pokemons.id, pokemonId),
//         with: {
//           names: true,
//         },
//       })

//       console.log(pokemonResult)
//     })
//   })

export default setupRoutes
