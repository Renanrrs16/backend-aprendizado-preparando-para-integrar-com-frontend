const express = require('express')
const controller = require('./personagem.controller')
const { validateObjectId } = require('../db/database.helper')

const router = express.Router()



router.get('/', controller.readAll)
router.get('/:id', validateObjectId, controller.readById)
router.post('/', controller.create)
router.put('/:id', validateObjectId, controller.updateById)
router.delete('/:id', validateObjectId, controller.deleteByID)

module.exports = router