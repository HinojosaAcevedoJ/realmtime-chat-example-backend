const Room = require('../../validations/RoomModelSchema')

const createRoom = async (req, res) => {
  const data = new Room(req.body)
  data.users.push(res.locals.decodedToken.sub)
  const response = await data.save()
  if (response) {
    res.status(200).json({ message: 'Sala creada con éxito' })
  } else {
    res.status(500).json({ message: 'Internal Error' })
  }
}

module.exports = createRoom
