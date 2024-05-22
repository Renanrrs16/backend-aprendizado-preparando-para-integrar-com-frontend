const personagem = require('./personagem.entity')
const service = require('./personagem.service')

async function readAll(req, res) {
  // Acessamos a lista de personagens no Service
  const items = await service.readAll()

  // Enviamos a lista de personagens como resultado
  res.send(items)
}

async function readById(req, res) {
  // Acessamos o parametro de Rota ID
  const id = req.params.id

  //Acessamos o personagem no service atraves do ID
  const item = await service.readById(id)

  // Checamos se o item obtido e existente
  if (!item) {
    return res.status(404).send('Item não encontrado.')
  }

  // Enviamos o item como resposta
  res.send(item)
}

async function create(req, res) {

  // Acessamos e validamos o body da Requisição
  const {error, value: newItem} = personagem.validate(req.body)

  // Checar se o temos algum erro na validação
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  // Adicionamos no db atraves do Service
  await service.create(newItem)

  // Exibimos a mensagem com sucesso
  res.status(201).send(newItem)
}

async function updateById(req, res) {
  const id = req.params.id

  // Acessamos e validamos o body da Requisição
  const {error, value: newItem} = personagem.validate(req.body)

  // Checar se o temos algum erro na validação
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }


  // Atualizamos no DB o newItem pelo id, usando o service
  await service.updateById(id, newItem)

  // Envia uma mesagem de sucesso
  res.send(newItem)
}

async function deleteByID(req, res) {
  // Acessamos o parametro de rota
  const id = req.params.id

  // Remover o item do DB usando ID, via service
  await service.deleteByID(id)

  // Enviamos uma mensagem de sucesso
  res.send('Item deletado com sucesso: ' + id)
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteByID
}