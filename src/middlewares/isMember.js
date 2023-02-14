const Room = require('../validations/RoomModelSchema')

async function isMember(req, res, next) {
  const { roomId } = req.params
  const userId = res.locals.decodedToken.sub
  const room = await Room.findOne({ _id: roomId, users: userId })
  if (!room) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  try {
    await next()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = isMember
