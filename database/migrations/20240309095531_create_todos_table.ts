import type { Knex } from "@lunoxjs/eloquent";

const table_name = "todos";

/**
 * Up the Migration
 */
export const up = function (db: Knex) {
  return db.schema.createTable(table_name, (t) => {
    t.bigIncrements("id").primary().notNullable();
    t.string("title").notNullable();
    t.text("description").nullable();
    t.bigInteger("user_id").unsigned().references("users.id");
    t.dateTime("due_date").nullable();
    t.boolean("is_starred").notNullable().defaultTo(false);
    t.boolean("is_completed").notNullable().defaultTo(false);
    t.enum("priority", ["Low", "Medium", "High"]).notNullable().defaultTo("Low");
    t.text("tags").nullable();
    t.timestamps(true, true);
  });
};

/**
 * Drop the Migration with knex
 */
export const down = function (db: Knex) {
  return db.schema.dropTableIfExists(table_name);
};

// halooo
