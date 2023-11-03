import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', (table) => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })

  await knex.schema.createTable('board', (table) => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })

  await knex.schema.createTable('column', (table) => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })

  await knex.schema.createTable('card', (table) => {
    table.uuid('id').primary()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('user')
  await knex.schema.dropTable('board')
  await knex.schema.dropTable('column')
  await knex.schema.dropTable('card')
}
