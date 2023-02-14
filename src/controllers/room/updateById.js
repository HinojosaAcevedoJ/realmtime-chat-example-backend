const mongoose = require('mongoose')

const Room = require('../../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

const updateById = async (req, res) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.status(404).json({ message: 'Sala no encontrado' })
  }

  const payload = req.body

  const response = await Room.findByIdAndUpdate(ObjectId(id), payload)
  if (response) {
    res.status(200).json({ message: 'Sala actualizada' })
  } else {
    res.status(404).json({ message: 'Sala no encontrado' })
  }
}

module.exports = updateById
