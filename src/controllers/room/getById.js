const mongoose = require('mongoose')
const Room = require('../../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

const getById = async (req, res) => {
  const { id } = req.query.id
  if (!ObjectId.isValid(id)) {
    res.status(404).json({ message: 'Sala no encontrado' })
  }
  const data = await Room.findById(id)
  res.send(data)
}

module.exports = getById
