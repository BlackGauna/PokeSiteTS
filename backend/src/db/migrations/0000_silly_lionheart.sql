DO $$ BEGIN
 CREATE TYPE "public"."languages" AS ENUM('roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en', 'cs', 'ja', 'zh-Hans', 'pt-BR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pokemonNames" (
	"id" serial PRIMARY KEY NOT NULL,
	"languages" "languages" NOT NULL,
	"name" text NOT NULL,
	"pokemonId" smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pokemon" (
	"id" smallint PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "pokemon_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pokemonNames" ADD CONSTRAINT "pokemonNames_pokemonId_pokemon_id_fk" FOREIGN KEY ("pokemonId") REFERENCES "public"."pokemon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
