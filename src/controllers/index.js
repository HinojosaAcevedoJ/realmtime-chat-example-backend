const signup = require('./auth/signup')
const login = require('./auth/login')
const createRoom = require('./room/create')
const getRooms = require('./room/getAll')
const deleteRoomById = require('./room/deleteById')
const getRoomByCategory = require('./room/getByCategory')
const getRoomById = require('./room/getById')
const updateRoomById = require('./room/updateById')
const sendMessage = require('./room/sendMessage')
const getMessagesByRoomId = require('./room/getMessagesByRoomId')
const joinRoom = require('./room/joinRoom')

module.exports = {
  signup,
  login,
  createRoom,
  getRooms,
  deleteRoomById,
  getRoomByCategory,
  getRoomById,
  updateRoomById,
  sendMessage,
  getMessagesByRoomId,
  joinRoom
}
