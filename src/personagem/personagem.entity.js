const Joi = require('joi');

const personagem = Joi.object({
  nome: Joi
    .string()
    .min(3)
    .max(30)
    .required(),
});

module.exports = personagem