import { getAllPokemonIdsAndNames } from "@/db/queries/pokemon.queries"
import { preparePokemonAndMoves } from "@/server/middleware/pokeapi/FillPokedex"
import { insertItems } from "@/server/middleware/pokeapi/ItemsHelper"
import { getAndSaveLocations } from "@/server/middleware/pokeapi/LocationHelper"
import Elysia from "elysia"

const enc = new TextEncoder()

function makeStream(task: (send: (msg: string) => void) => Promise<void>): ReadableStream {
  return new ReadableStream({
    async start(controller) {
      const send = (msg: string) => {
        controller.enqueue(enc.encode(JSON.stringify({ log: msg }) + "\n"))
      }
      try {
        await task(send)
      } catch (e) {
        send(`Error: ${String(e)}`)
      } finally {
        controller.close()
      }
    },
  })
}

export const adminRoutes = new Elysia({ prefix: "/admin" })
  .get("/setup/pokedex", async () => {
    const pokemonsDbArray = await getAllPokemonIdsAndNames()
    return { pokemonsDbArray }
  })
  .post("/setup/pokedex", ({ set }) => {
    set.headers["Content-Type"] = "text/plain; charset=utf-8"
    set.headers["Cache-Control"] = "no-cache"
    return makeStream(send => preparePokemonAndMoves(1, 386, send))
  })
  .post("/setup/locations", ({ set }) => {
    set.headers["Content-Type"] = "text/plain; charset=utf-8"
    set.headers["Cache-Control"] = "no-cache"
    return makeStream(send => getAndSaveLocations(send))
  })
  .post("/setup/items", ({ set }) => {
    set.headers["Content-Type"] = "text/plain; charset=utf-8"
    set.headers["Cache-Control"] = "no-cache"
    return makeStream(async send => {
      send("Inserting items and item placements…")
      await insertItems()
      send("Items inserted successfully.")
    })
  })
