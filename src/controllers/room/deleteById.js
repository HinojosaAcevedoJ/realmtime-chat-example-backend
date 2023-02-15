// const mongoose = require('mongoose')

const Room = require('../../validations/RoomModelSchema')

// const { ObjectId } = mongoose.Types

const deleteById = async (req, res) => {
  const { roomid } = req.params
  const response = await Room.deleteOne(roomid)
  console.log(response)
  if (response) {
    res.status(200).json({ message: 'Sala eliminada con éxito' })
  } else {
    res.status(404).json({ message: 'Sala no encontrado' })
  }
}

module.exports = deleteById
