const Joi = require('joi');

const personagem = Joi.object({
  nome: Joi.string()
    .min(1)
    .max(30)
    .required(),

  imagem: Joi.string()
    .uri()
    .required(),

  evoluiPara: Joi.string()
    .min(1)
    .max(30)
    .optional()
});


module.exports = personagem