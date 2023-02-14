const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiRoomSchema = {
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.min': 'El nombre de la sala debe tener al menos {#limit} caracteres',
      'string.max': 'El nombre de la sala no debe tener mas de {#limit} caracteres'
    }),
  category: Joi.string()
    .required(),
  users: Joi.array()
    .items(Joi.string())
    .default([])
    .required(),
  password: Joi.string()
    .default('')
    .allow(''),
  access: Joi.bool()
    .default(true),
  permissions: Joi.string()
    .default('1'),
}

const roomSchema = Joi.object(joiRoomSchema)
  .id('roomSchema')

const mongooseRoomSchema = new mongoose.Schema(
  joigoose.convert(roomSchema)
)

module.exports = mongoose.model('room', mongooseRoomSchema)
