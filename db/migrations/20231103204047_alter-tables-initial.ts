import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('user', (table) => {
    table.string('email').notNullable().unique()
    table.string('name')
  })

  await knex.schema.alterTable('board', (table) => {
    table.string('name').notNullable()
  })

  await knex.schema.alterTable('column', (table) => {
    table.string('name').notNullable()
    table.integer('wip').notNullable().defaultTo(0)
    table.integer('wip-limits').notNullable().defaultTo(1)
  })

  await knex.schema.alterTable('card', (table) => {
    table.string('title').notNullable()
    table.string('description')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('user', (table) => {
    table.dropColumn('email')
    table.dropColumn('name')
  })

  await knex.schema.alterTable('board', (table) => {
    table.dropColumn('name')
  })

  await knex.schema.alterTable('column', (table) => {
    table.dropColumn('name')
    table.dropColumn('wip')
    table.dropColumn('wip-limits')
  })

  await knex.schema.alterTable('card', (table) => {
    table.dropColumn('title')
    table.dropColumn('description')
  })
}
