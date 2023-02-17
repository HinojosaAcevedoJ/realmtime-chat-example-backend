const mongoose = require('mongoose')
const Room = require('../validations/RoomModelSchema')

const { ObjectId } = mongoose.Types

async function isMember(req, res, next) {
  try {
    const { roomId } = req.params
    const userId = res.locals.decodedToken.sub
    const room = await Room.findById(ObjectId(roomId))
    if (!room) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }
    if (!room.users.includes(userId)) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }
    await next()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = isMember
