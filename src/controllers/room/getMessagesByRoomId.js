const mongoose = require('mongoose')
const Message = require('../../validations/MessageModelSchema')
const Room = require('../../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

const getMessagesByRoomId = async (req, res) => {
  const { roomId } = req.params
  if (!ObjectId.isValid(roomId)) {
    res.status(404).json({ message: 'Sala no encontrada' })
    return
  }
  const room = await Room.findById(roomId)
  if (!room) {
    res.status(404).json({ message: 'Sala no encontrada' })
    return
  }
  const data = await Message.find({ room: roomId }).populate('user')
  res.send(data)
}

module.exports = getMessagesByRoomId
