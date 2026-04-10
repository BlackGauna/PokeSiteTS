CREATE TYPE "public"."trainer-class" AS ENUM('pkmn-trainer-1', 'pkmn-trainer-2', 'hiker', 'team-aqua', 'pkmn-breeder', 'cooltrainer', 'bird-keeper', 'collector', 'swimmer-m', 'team-magma', 'expert', 'aqua-admin', 'black-belt', 'aqua-leader', 'hex-maniac', 'aroma-lady', 'ruin-maniac', 'interviewer', 'tuber-f', 'tuber-m', 'lady', 'beauty', 'rich-boy', 'pokemaniac', 'guitarist', 'kindler', 'camper', 'picnicker', 'bug-maniac', 'psychic', 'gentleman', 'elite-four', 'leader', 'school-kid', 'sr-and-jr', 'winstrate', 'pokefan', 'youngster', 'champion', 'fisherman', 'triathlete', 'dragon-tamer', 'ninja-boy', 'battle-girl', 'parasol-lady', 'swimmer-f', 'twins', 'sailor', 'cooltrainer-2', 'magma-admin', 'rival', 'bug-catcher', 'pkmn-ranger', 'magma-leader', 'lass', 'young-couple', 'old-couple', 'sis-and-bro', 'salon-maiden', 'dome-ace', 'palace-maven', 'arena-tycoon', 'factory-head', 'pike-queen', 'pyramid-king', 'rs-protag');--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" RENAME TO "pokemon-encounter-method";--> statement-breakpoint
ALTER TYPE "public"."move_learn_method" RENAME TO "move-learn-method";--> statement-breakpoint
CREATE TABLE "trainer-fight-pokemon-moves" (
	"fightPokemonId" integer NOT NULL,
	"moveId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trainer-fight-pokemon" (
	"id" serial PRIMARY KEY NOT NULL,
	"trainerFightId" integer NOT NULL,
	"pokemonId" integer NOT NULL,
	"iv" smallint NOT NULL,
	"level" smallint NOT NULL,
	"heldItem" integer
);
--> statement-breakpoint
CREATE TABLE "trainer-fights" (
	"id" serial PRIMARY KEY NOT NULL,
	"matchNumber" integer NOT NULL,
	"starterPokemonId" integer,
	"coordinates" integer[],
	"calcAsDoubleBattle" boolean DEFAULT false NOT NULL,
	"locationId" integer,
	"trainerId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trainers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"class" "trainer-class" NOT NULL,
	"doubleBattle" boolean NOT NULL,
	CONSTRAINT "trainers_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "trainer-fight-pokemon-moves" ADD CONSTRAINT "trainer-fight-pokemon-moves_fightPokemonId_trainer-fight-pokemon_id_fk" FOREIGN KEY ("fightPokemonId") REFERENCES "public"."trainer-fight-pokemon"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fight-pokemon-moves" ADD CONSTRAINT "trainer-fight-pokemon-moves_moveId_move_id_fk" FOREIGN KEY ("moveId") REFERENCES "public"."move"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fight-pokemon" ADD CONSTRAINT "trainer-fight-pokemon_trainerFightId_trainer-fights_id_fk" FOREIGN KEY ("trainerFightId") REFERENCES "public"."trainer-fights"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fight-pokemon" ADD CONSTRAINT "trainer-fight-pokemon_pokemonId_pokemons_id_fk" FOREIGN KEY ("pokemonId") REFERENCES "public"."pokemons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fight-pokemon" ADD CONSTRAINT "trainer-fight-pokemon_heldItem_items_id_fk" FOREIGN KEY ("heldItem") REFERENCES "public"."items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fights" ADD CONSTRAINT "trainer-fights_locationId_location_id_fk" FOREIGN KEY ("locationId") REFERENCES "public"."location"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trainer-fights" ADD CONSTRAINT "trainer-fights_trainerId_trainers_id_fk" FOREIGN KEY ("trainerId") REFERENCES "public"."trainers"("id") ON DELETE cascade ON UPDATE no action;