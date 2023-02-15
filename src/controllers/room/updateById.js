const mongoose = require('mongoose')

const Room = require('../../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

const updateById = async (req, res) => {
  const { roomId } = req.params
  if (!ObjectId.isValid(roomId)) {
    res.status(404).json({ message: 'Sala no encontrada' })
  }

  const payload = req.body

  const response = await Room.findByIdAndUpdate(ObjectId(roomId), payload)
  if (response) {
    res.status(200).json({ message: 'Sala actualizada' })
  } else {
    res.status(404).json({ message: 'Sala no encontrada' })
  }
}

module.exports = updateById
