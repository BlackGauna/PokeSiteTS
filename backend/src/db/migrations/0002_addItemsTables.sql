CREATE TYPE "public"."item-type" AS ENUM('item', 'berry', 'ball', 'tm', 'hm', 'base-item');--> statement-breakpoint
CREATE TABLE "item_placements" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"coordinates" integer[] NOT NULL,
	"amount" smallint NOT NULL,
	"isHidden" boolean NOT NULL,
	"itemId" integer NOT NULL,
	"locationId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" "item-type",
	CONSTRAINT "items_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "item_placements" ADD CONSTRAINT "item_placements_itemId_items_id_fk" FOREIGN KEY ("itemId") REFERENCES "public"."items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "item_placements" ADD CONSTRAINT "item_placements_locationId_location_id_fk" FOREIGN KEY ("locationId") REFERENCES "public"."location"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "item_placements_coordinates_locationId_index" ON "item_placements" USING btree ("coordinates","locationId");