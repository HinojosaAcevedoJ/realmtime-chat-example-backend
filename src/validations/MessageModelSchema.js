const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiMessageSchema = {
  content: Joi.string()
    .required(),
  room: Joi.string()
    .required(),
  user: Joi.string()
    .required(),
}

const messageSchema = Joi.object(joiMessageSchema)
  .id('messageSchema')

const mongooseMessageSchema = new mongoose.Schema(
  joigoose.convert(messageSchema)
)

module.exports = mongoose.model('message', mongooseMessageSchema)
