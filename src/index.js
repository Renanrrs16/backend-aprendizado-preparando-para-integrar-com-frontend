require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')

//Routers
const personagemRouter = require('./personagem/personagem.router')

// Declaramos a funcao main()
async function main() {
  //conectamos no DB
  await connectToDatabase()

  //Inicamos o Express
  const app = express()

  //Middlewares
  //Sinaliza para o Express que estamos usando JSON no Body
  app.use(express.json())

  //Endpoit de Hellor world
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  //Router
  app.use('/personagem', personagemRouter)

  app.listen(3000, function () {
    console.log('Aplicação rodando em http://localhost:3000')
  })
}

// Executamos a funcao main()
main()