import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/tables', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app.get('/user/insert', async () => {
  const user = await knex('user')
    .insert({
      id: crypto.randomUUID(),
      email: 'email2@mail.com',
    })
    .returning('*')

  return user
})

app.get('/user/select', async () => {
  const user = await knex('user').select('*')

  return user
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
