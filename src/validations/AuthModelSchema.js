const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiAuthSchema = {
  email: Joi.string()
    .email()
    .required(),
  user: Joi.string()
    .min(3)
    .max(16)
    .required()
    .messages({
      'string.min': 'El nombre de usuario debe tener al menos {#limit} caracteres',
      'string.max': 'El nombre de usuario no debe tener mas de {#limit} caracteres'
    }),
  password: Joi.string()
    .required(),
  permissions: Joi.string()
    .default('1'),
}
const authSchema = Joi.object(joiAuthSchema)

const mongooseAuthSchema = new mongoose.Schema(
  joigoose.convert(authSchema)
)

module.exports = mongoose.model('user', mongooseAuthSchema)
