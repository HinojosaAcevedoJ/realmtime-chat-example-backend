const Room = require('../../validations/RoomModelSchema')

const getAll = async (_req, res) => {
  const data = await Room.find()
  res.send(data)
}

module.exports = getAll
