CREATE TYPE "public"."pokemon_encounter_method" AS ENUM('walk', 'old-rod', 'good-rod', 'super-rod', 'surf', 'rock-smash', 'headbutt', 'dark-grass', 'grass-spots', 'cave-spots', 'bridge-spots', 'super-rod-spots', 'surf-spots', 'yellow-flowers', 'purple-flowers', 'red-flowers', 'rough-terrain', 'gift', 'gift-egg', 'only-one');--> statement-breakpoint
CREATE TYPE "public"."move_learn_method" AS ENUM('level-up', 'egg', 'tutor', 'machine', 'stadium-surfing-pikachu', 'light-ball-egg', 'colosseum-purification', 'xd-shadow', 'xd-purification', 'form-change', 'zygarde-cube');--> statement-breakpoint
CREATE TYPE "public"."language" AS ENUM('ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en', 'cs', 'ja', 'zh-Hans', 'pt-BR');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'stellar', 'unknown');--> statement-breakpoint
CREATE TYPE "public"."version_groups" AS ENUM('red-blue', 'yellow', 'gold-silver', 'crystal', 'ruby-sapphire', 'emerald', 'firered-leafgreen', 'diamond-pearl', 'platinum', 'heartgold-soulsilver', 'black-white', 'colosseum', 'xd', 'black-2-white-2', 'x-y', 'omega-ruby-alpha-sapphire', 'sun-moon', 'ultra-sun-ultra-moon', 'lets-go-pikachu-lets-go-eevee', 'sword-shield', 'brilliant-diamond-and-shining-pearl');--> statement-breakpoint
CREATE TABLE "location" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "location_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "location_pokemon" (
	"location_id" integer NOT NULL,
	"pokemon_id" smallint NOT NULL,
	"encounter_chance" smallint NOT NULL,
	"encounter_method" "pokemon_encounter_method",
	"min_level" smallint NOT NULL,
	"max_level" smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "move" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"power" smallint,
	"accuracy" smallint,
	"pp" smallint NOT NULL,
	"priority" smallint NOT NULL,
	"type" "type" NOT NULL,
	CONSTRAINT "move_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "move_name" (
	"language" "language" NOT NULL,
	"name" text NOT NULL,
	"id" serial NOT NULL,
	"move_id" smallint NOT NULL,
	CONSTRAINT "move_name_move_id_language_pk" PRIMARY KEY("move_id","language"),
	CONSTRAINT "move_name_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "pokemons" (
	"id" smallint PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"baseExp" smallint,
	"height" smallint,
	"weight" smallint,
	"hp" smallint NOT NULL,
	"atk" smallint NOT NULL,
	"spAtk" smallint NOT NULL,
	"def" smallint NOT NULL,
	"spDef" smallint NOT NULL,
	"speed" smallint NOT NULL,
	"types" "type"[] NOT NULL,
	"captureRate" smallint,
	CONSTRAINT "pokemons_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "pokemon_names" (
	"language" "language" NOT NULL,
	"name" text NOT NULL,
	"pokemon_id" smallint NOT NULL,
	CONSTRAINT "pokemon_names_pokemon_id_language_pk" PRIMARY KEY("pokemon_id","language")
);
--> statement-breakpoint
CREATE TABLE "pokemon_moves" (
	"pokemonId" smallint NOT NULL,
	"moveId" smallint NOT NULL,
	"learnMethod" "move_learn_method" NOT NULL,
	"level" smallint NOT NULL,
	"version" "version_groups" NOT NULL,
	CONSTRAINT "pokemon_moves_pokemonId_moveId_pk" PRIMARY KEY("pokemonId","moveId")
);
--> statement-breakpoint
ALTER TABLE "location_pokemon" ADD CONSTRAINT "location_pokemon_location_id_location_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "location_pokemon" ADD CONSTRAINT "location_pokemon_pokemon_id_pokemons_id_fk" FOREIGN KEY ("pokemon_id") REFERENCES "public"."pokemons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "move_name" ADD CONSTRAINT "move_name_move_id_move_id_fk" FOREIGN KEY ("move_id") REFERENCES "public"."move"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pokemon_names" ADD CONSTRAINT "pokemon_names_pokemon_id_pokemons_id_fk" FOREIGN KEY ("pokemon_id") REFERENCES "public"."pokemons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_pokemonId_pokemons_id_fk" FOREIGN KEY ("pokemonId") REFERENCES "public"."pokemons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pokemon_moves" ADD CONSTRAINT "pokemon_moves_moveId_move_id_fk" FOREIGN KEY ("moveId") REFERENCES "public"."move"("id") ON DELETE no action ON UPDATE no action;