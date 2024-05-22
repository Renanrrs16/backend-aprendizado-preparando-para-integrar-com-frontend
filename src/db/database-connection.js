const { MongoClient } = require('mongodb')

// Preparamos as informacoes ao banco de dados
const dburl = process.env.DATABASE_URL
const dbname = 'mongodb-arquitetura-mvc'

const client = new MongoClient(dburl)

async function connectToDatabase() {
  // Realizamos a conexao com o banco de dados

  console.log('conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!.')
}

function getDatabase() {
  return client.db(dbname)
}

module.exports = {
  connectToDatabase,
  getDatabase
}