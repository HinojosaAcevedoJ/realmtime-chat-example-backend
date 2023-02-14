const Room = require('../../validations/RoomModelSchema')

const getByCategory = async (req, res) => {
  const query = await Room.find({ category: req.query.category })
  res.send(query)
}

module.exports = getByCategory
