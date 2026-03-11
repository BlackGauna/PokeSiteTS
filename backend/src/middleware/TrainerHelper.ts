import { getLocationId } from "@/db/api/location.queries"
import { getAllMoveIdsAndNames, getPokemonMoves } from "@/db/api/move.queries"
import { getAllPokemonIdsAndNames } from "@/db/api/pokemon.queries"
import { saveTrainersAndFights } from "@/db/api/trainer.queries"
import { parseTrainerClass } from "@/db/enums"
import type {
  TrainerFightInsertAllInfo,
  TrainerFightPokemonInsertWithMoves,
  TrainerInsertAllInfo,
} from "@/db/schemas"
import { fuzzy } from "fast-fuzzy"
import { trainerPokemon } from "imports/trainer-pokemon"
import { trainers as trainersRaw } from "imports/trainers"

export const parseTrainerPokemon = async () => {
  const dbPokemon = await getAllPokemonIdsAndNames()
  const dbMoves = await getAllMoveIdsAndNames()

  const trainers: TrainerInsertAllInfo[] = []

  for (const [name, info] of Object.entries(trainersRaw)) {
    // TODO: find solution for rivals, as their names are with the encounter location and starter choise
    const isGrunt = name.toLowerCase().includes("grunt")
    const trainerName = isGrunt ? name : info.trainerName.toLowerCase()
    if (name.includes("Placeholder")) continue

    const starterPokemonId = getRivalStarter(name, info.trainerName)

    const locationId = await getLocationIdFromName(name)

    let trainerId = trainers.findIndex(
      element => element.name.toLowerCase() === info.trainerName.toLowerCase(),
    )

    if (trainerId < 0) {
      const trainer = {
        name: trainerName,
        class: parseTrainerClass(info.trainerClass.toLowerCase())!,
        doubleBattle: info.doubleBattle,
        fights: [],
      }
      trainerId = trainers.push(trainer) - 1
      // trainerId = trainers.length - 1
    }

    const matchNumber = +name[name.length - 1]!
    const fightInfo = trainerPokemon[name]

    if (!fightInfo || fightInfo.length < 1) {
      console.log(`Could not find fight info for trainer ${trainerName}`)
      continue
    }

    const fightPokemons: TrainerFightPokemonInsertWithMoves[] = []

    for (const pokemon of fightInfo) {
      const pokemonId = dbPokemon.find(
        poke => poke.name.toLowerCase() === pokemon.species.toLowerCase(),
      )!.id

      const moves = await parseMoves(pokemon, pokemonId, dbMoves)

      const fightPokemon: TrainerFightPokemonInsertWithMoves = {
        iv: pokemon.iv,
        trainerFightId: 0,
        pokemonId: pokemonId,
        moves: moves,
        level: pokemon.lvl,
      }
      fightPokemons.push(fightPokemon)
    }

    const trainerFight: TrainerFightInsertAllInfo = {
      matchNumber: isNaN(matchNumber) ? 1 : matchNumber,
      trainerId: 0, // will be overwritten during save with correct value
      pokemons: fightPokemons,
      starterPokemonId: starterPokemonId,
      calcAsDoubleBattle: !info.trainerName.includes("&") && info.doubleBattle ? true : false,
      locationId: locationId,
    }
    // trainerFights.push(trainerFight)
    trainers[trainerId]?.fights.push(trainerFight)
  }

  await saveTrainersAndFights(trainers)
  // writeToTestFile(trainers)
  console.log("finished with trainers")
}

const getLocationIdFromName = async (name: string) => {
  const nameLower = name.toLowerCase()

  let queryName = ""
  if (nameLower.includes("route")) {
    const regex = /route(\d+)/
    const routeNumber = nameLower.match(regex)?.[1]
    if (routeNumber) queryName = `route-${routeNumber}`
  }
  if (nameLower.includes("seafloorcavern")) queryName = "seafloor-cavern"
  if (nameLower.includes("aquahideout")) queryName = "team-aqua-hideout"
  if (nameLower.includes("petalburgwoods")) queryName = "petalburg-woods"
  if (nameLower.includes("rustboro")) queryName = "rustboro-city"
  if (nameLower.includes("lilycove")) queryName = "lilycove-city"
  if (nameLower.includes("mauville")) queryName = "mauville-city"
  if (nameLower.includes("vr")) queryName = "victory-road-b2f"
  // if (queryName.length > 0) console.log(`${name}: ${queryName}`)

  return queryName.length > 0 ? await getLocationId(queryName) : null
}

const getRivalStarter = (name: string, defaultTrainerName: string) => {
  // if rival, parse location and starter pokemon
  const nameLower = name.toLowerCase()
  const isRival = nameLower.includes("brendan") || nameLower.includes("may")
  // const isLocationDependant = isNaN(+nameLower.replace(defaultTrainerName.toLowerCase(), ""))
  // const isGrunt = nameLower.includes("grunt")
  // const isDouble = defaultTrainerName.includes("&")

  // if ((!isRival && !isLocationDependant) || isGrunt || isDouble) return defaultTrainerName

  if (!isRival) return null
  // console.log("location trainer:", nameLower)

  const [starter, starterIndex] = getStarterPokemonId(nameLower)
  return starter
}

const getStarterPokemonId = (trainerName: string): [starter: number, index: number] => {
  if (trainerName.toLowerCase().includes("treecko")) return [252, 1]
  if (trainerName.toLowerCase().includes("torchic")) return [252, 1]
  if (trainerName.toLowerCase().includes("mudkip")) return [252, 1]
  else throw new Error(`Could not get starter pokemon from ${trainerName}`)
}

const parseMoves = async (
  pokemon: { iv: number; lvl: number; species?: string; moves?: string[]; heldItem?: string },
  pokemonId: number,
  dbMoves: { id: number; name: string }[],
) => {
  // TODO: moves are not complete, because moves only learned by a previous evolution are not there yet
  // need to add evolutions first

  let moves: number[] = []

  // if pokemon has no moves defined, we get the most recent 4 moves it can learn
  if (!pokemon.moves || pokemon.moves.length < 1) {
    let pokemonMoves = await getPokemonMoves(pokemonId)
    moves = pokemonMoves
      .filter(move => move.learnMethod === "level-up" && move.level <= pokemon.lvl)
      .sort((a, b) => b.level - a.level)
      .slice(0, 4)
      .map(el => el.moveId)
    return moves
  }

  moves = pokemon.moves
    .map(move => {
      let moveName = move.toLowerCase().replace("faint", "feint")

      return (
        dbMoves.find(
          dbMove => fuzzy(dbMove.name, moveName, { ignoreCase: true, ignoreSymbols: true }) > 0.85,
        )?.id ?? 0
      )
    })
    .filter(moveId => moveId != 0)

  if (moves.length !== pokemon.moves.length) {
    console.log("error getting moves", pokemon.moves, pokemon.species)
    console.log(
      "matches",
      pokemon.moves.map(
        move =>
          dbMoves.find(
            dbMove => fuzzy(dbMove.name, move, { ignoreCase: true, ignoreSymbols: true }) > 0.85,
          )?.id ?? 0,
      ),
    )
    console.log(
      "feint",
      pokemon.moves.map(move =>
        fuzzy("Feint Attack", move, { ignoreCase: true, ignoreSymbols: true }),
      ),
    )
  }
  return moves
}
