import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('bookings', table => {
        table.increments('id').primary().unsigned()
        table.string('user_assigned')
        table.string('movie_title').unique()
        table.string('movie_image').unique()
        table.string('movie_summary')
        table.string('movie_year')
    })
}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('bookings')
}
