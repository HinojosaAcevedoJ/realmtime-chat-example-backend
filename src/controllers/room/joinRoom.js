const Room = require('../../validations/RoomModelSchema')

const joinRoom = async (req, res) => {
  const { roomId } = req.params
  const { password } = req.body
  const userId = res.locals.decodedToken.sub

  const room = await Room.findById(roomId)

  if (!room) {
    res.status(404).send({ message: 'Sala no encontrada' })
  }

  if (room.password && room.password !== password) {
    res.status(401).send({ message: 'Contraseña incorrecta' })
  }

  if (!room.users.includes(userId)) {
    room.users.push(userId)
    const response = await room.save()
    if (response) {
      res.status(200).json({ message: 'Te has unido a la sala' })
    } else {
      res.status(500).json({ message: 'Internal Error' })
    }
  } else {
    res.status(200).json({ message: 'Ya estás en la sala' })
  }
}

module.exports = joinRoom
