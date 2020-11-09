import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().unsigned()
        table.string('username').unique().index()
        table.string('password')
    })
}
export async function down(knex: Knex): Promise<void> {
     return knex.schema.dropTable('users')
}

