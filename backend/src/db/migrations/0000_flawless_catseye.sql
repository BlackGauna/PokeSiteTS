DO $$ BEGIN
 CREATE TYPE "public"."move_learn_method" AS ENUM('level-up', 'egg', 'tutor', 'machine', 'stadium-surfing-pikachu', 'light-ball-egg', 'colosseum-purification', 'xd-shadow', 'xd-purification', 'form-change', 'zygarde-cube');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."language" AS ENUM('roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en', 'cs', 'ja', 'zh-Hans', 'pt-BR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'stellar', 'unknown');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "move" (
	"id" serial PRIMARY KEY NOT NULL,
	"power" smallint NOT NULL,
	"accuracy" smallint NOT NULL,
	"pp" smallint NOT NULL,
	"priority" smallint NOT NULL,
	"type" "type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "move_name" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" "language" NOT NULL,
	"name" text NOT NULL,
	"move_id" smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pokemon" (
	"id" smallint PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"base_experience" smallint,
	"height" smallint,
	"weight" smallint,
	"hp" smallint NOT NULL,
	"atk" smallint NOT NULL,
	"sp_atk" smallint NOT NULL,
	"def" smallint NOT NULL,
	"sp_def" smallint NOT NULL,
	"speed" smallint NOT NULL,
	"type" "type" NOT NULL,
	"type2" "type",
	"capture_rate" smallint,
	CONSTRAINT "pokemon_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pokemon_move" (
	"pokemon_id" smallint NOT NULL,
	"move_id" smallint NOT NULL,
	"learn_method" "move_learn_method" NOT NULL,
	"level" smallint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pokemon_name" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" "language" NOT NULL,
	"name" text NOT NULL,
	"pokemon_id" smallint NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "move_name" ADD CONSTRAINT "move_name_move_id_move_id_fk" FOREIGN KEY ("move_id") REFERENCES "public"."move"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pokemon_move" ADD CONSTRAINT "pokemon_move_pokemon_id_pokemon_id_fk" FOREIGN KEY ("pokemon_id") REFERENCES "public"."pokemon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pokemon_move" ADD CONSTRAINT "pokemon_move_move_id_move_id_fk" FOREIGN KEY ("move_id") REFERENCES "public"."move"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pokemon_name" ADD CONSTRAINT "pokemon_name_pokemon_id_pokemon_id_fk" FOREIGN KEY ("pokemon_id") REFERENCES "public"."pokemon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
