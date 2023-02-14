const mongoose = require('mongoose')
const Message = require('../../validations/MessageModelSchema')
const Room = require('../../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

const sendMessage = async (req, res) => {
  const { roomId } = req.params
  const message = req.body
  const userId = res.locals.decodedToken.sub

  if (!ObjectId.isValid(roomId)) {
    res.status(404).json({ message: 'Sala no encontrada' })
  }

  const room = await Room.findById(roomId)

  if (!room) {
    res.status(404).json({ message: 'Sala no encontrada' })
  }

  const data = new Message({
    ...message,
    room: roomId,
    user: userId
  })

  const response = await data.save()

  if (response) {
    res.status(200).json({ message: 'Mensaje enviado con exito' })
  } else {
    res.status(500).json({ message: 'Internal Error' })
  }
}

module.exports = sendMessage
