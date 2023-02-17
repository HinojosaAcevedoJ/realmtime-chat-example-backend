const mongoose = require('mongoose')
const Room = require('../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

async function verifyOwnership(req, res, next) {
  try {
    const { roomId } = req.params
    const userId = res.locals.decodedToken.sub
    const room = await Room.findById(ObjectId(roomId))
    if (!room) {
      res.status(404).json({ message: 'Sala no encontrada' })
      return
    }

    if (room.owner.toString() !== userId) {
      res.status(403).json({ message: 'No tienes permiso para realizar esta acción' })
      return
    }

    await next()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = verifyOwnership
