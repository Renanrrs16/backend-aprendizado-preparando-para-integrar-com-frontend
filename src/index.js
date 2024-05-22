require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const cors = require('cors')
require('express-async-errors');

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
  app.use(cors())


  //Endpoit de Hellor world
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  //Router
  app.use('/personagem', personagemRouter)

  //erro Handling
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo deu errado!' });
  });

  // Endpoint catch-all para rotas não encontradas
  app.use('*', (req, res) => {
    res.status(404).send({ error: 'Endpoint não encontrado' });
  });

  app.listen(3000, function () {
    console.log('Aplicação rodando em http://localhost:3000')
  })
}

// Executamos a funcao main()
main()