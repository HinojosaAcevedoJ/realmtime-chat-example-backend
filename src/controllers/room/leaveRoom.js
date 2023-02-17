const Room = require('../../validations/RoomModelSchema')

const leaveRoom = async (req, res) => {
  const { roomId } = req.params
  const userId = res.locals.decodedToken.sub

  const room = await Room.findById(roomId)

  if (!room) {
    res.status(404).json({ message: 'Sala no encontrada' })
  }

  const userIndex = room.users.indexOf(userId)

  if (room.owner.toString() === userId) {
    res.status(403).json({ message: 'No puedes abandonar una sala que has creado' })
  } else
  if (userIndex === -1) {
    res.status(404).json({ message: 'Usuario no encontrado en la sala' })
  } else {
    room.users.splice(userIndex, 1)
    const response = await room.save()
    if (response) {
      res.status(200).json({ message: 'Has abandonado la sala' })
    } else {
      res.status(500).json({ message: 'Internal Error' })
    }
  }
}

module.exports = leaveRoom
