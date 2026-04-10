CREATE TYPE "public"."regions" AS ENUM('kanto', 'johto', 'hoenn');--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'pokeflute';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'headbutt-low';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'headbutt-normal';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'headbutt-high';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'squirt-bottle';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'wailmer-pail';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'seaweed';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'roaming-grass';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'roaming-water';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'devon-scope';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'feebas-tile-fishing';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'island-scan';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'sos-encounter';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'bubbling-spots';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'berry-piles';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'npc-trade';--> statement-breakpoint
ALTER TYPE "public"."pokemon_encounter_method" ADD VALUE 'sos-from-bubbling-spot';--> statement-breakpoint
ALTER TABLE "location_pokemon" RENAME TO "location_encounters";--> statement-breakpoint
ALTER TABLE "location_encounters" DROP CONSTRAINT "location_pokemon_location_id_location_id_fk";
--> statement-breakpoint
ALTER TABLE "location_encounters" DROP CONSTRAINT "location_pokemon_pokemon_id_pokemons_id_fk";
--> statement-breakpoint
ALTER TABLE "location" ADD COLUMN "region" "regions" NOT NULL;--> statement-breakpoint
ALTER TABLE "location" ADD COLUMN "boundsSw" integer[2] NOT NULL;--> statement-breakpoint
ALTER TABLE "location" ADD COLUMN "boundsNe" integer[2] NOT NULL;--> statement-breakpoint
ALTER TABLE "location_encounters" ADD CONSTRAINT "location_encounters_location_id_location_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "location_encounters" ADD CONSTRAINT "location_encounters_pokemon_id_pokemons_id_fk" FOREIGN KEY ("pokemon_id") REFERENCES "public"."pokemons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "location_name_region_index" ON "location" USING btree ("name","region");--> statement-breakpoint
CREATE INDEX "location_encounters_location_id_pokemon_id_index" ON "location_encounters" USING btree ("location_id","pokemon_id");