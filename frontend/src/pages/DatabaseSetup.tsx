import { useQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import type { App } from "@server/server"
import { treaty } from "@elysiajs/eden"
// import { hc } from "hono/client"
// import axios from "axios"

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_SERVER_URL,
// })

const client = treaty<App>(import.meta.env.VITE_SERVER_URL)
// const client = hc<App>(import.meta.env.VITE_SERVER_URL)

// type Props = {}

function DatabaseSetup() {
  // const [pokemonData, setPokemonData] = useState({})

  const [logOutput, setLogOutput] = useState(<div></div>)
  const logRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isPending, error, data, fetchStatus, refetch } = useQuery({
    queryKey: ["pokeapiData"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 3000))

      // using ElysiaJS Treaty as axios alternative
      const res = await client.admin.setup.pokedex.get()

      if (res.error) {
        throw res.error
      }

      return res.data
    },
    enabled: false,
  })

  useEffect(() => {
    console.log("isPending: ", isPending)
    if (error) {
      setLogOutput(log => (
        <>
          {log}
          <p className="text-red-600">error: {error.message}</p>
        </>
      ))
    }

    if (!isPending && !error) {
      setLogOutput(log => (
        <>
          {log}
          <p>no errors</p>
        </>
      ))
    }
  }, [isPending, fetchStatus, error])

  useEffect(() => {
    if (data) {
      console.log("data", data)

      // data.map(el => {
      //   console.log(el)
      // })

      setLogOutput(log => (
        <>
          {log}
          <p>got data:</p>
          {data.pokemonsDbArray.map(pokemon => (
            <p key={pokemon.id} className="ps-8">
              {pokemon.name}
            </p>
          ))}
        </>
      ))
    }
  }, [data])

  // when log is updated, scroll to last line
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [logOutput])

  const onClickGetPokedex = () => {
    setLogOutput(<div>Getting pokedex entries...</div>)
    refetch()
  }

  return (
    <div className="flex h-screen place-items-center justify-center gap-10">
      <button
        className="ml-8 flex w-60 justify-center rounded-lg bg-blue-500 p-2 font-bold disabled:bg-blue-400 "
        onClick={onClickGetPokedex}
        disabled={fetchStatus !== "idle" && isPending}
      >
        {fetchStatus !== "idle" && isPending ? (
          // Animated Spinner from https://github.com/n3r4zzurr0/svg-spinners/
          <>
            <svg
              className="animate-[spin_1.5s_linear_infinite] fill-gray-300"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="bg-white"
                d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
              ></path>
            </svg>
          </>
        ) : (
          "Get Pokedex"
        )}
      </button>

      <div
        className="min-w-0 flex-grow flex-col flex-wrap gap-2 place-self-start overflow-hidden pt-8"
        style={{ whiteSpace: "pre-line" }}
      >
        <div>
          <b>Log:</b>
        </div>
        <div ref={logRef} className="me-auto mr-10 h-[80vh] max-w-4xl overflow-y-auto border-2">
          {logOutput}
        </div>
      </div>
    </div>
  )
}

export default DatabaseSetup
