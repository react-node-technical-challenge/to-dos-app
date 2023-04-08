import { Knex } from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('to_dos', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.boolean('completed');
    table.timestamps();

    // This should have a foreign key to the non-existent
    // `users` table
    table.string('user_id');
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('to_dos');
}
