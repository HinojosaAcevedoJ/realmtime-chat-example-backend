const signup = require('./auth/signup')
const login = require('./auth/login')
const createRoom = require('./room/create')
const getRooms = require('./room/getAll')
const deleteRoomById = require('./room/deleteById')
const getRoomById = require('./room/getById')
const updateRoomById = require('./room/updateById')
const sendMessage = require('./room/sendMessage')
const getMessagesByRoomId = require('./room/getMessagesByRoomId')
const joinRoom = require('./room/joinRoom')
const leaveRoom = require('./room/leaveRoom')

module.exports = {
  signup,
  login,
  createRoom,
  getRooms,
  deleteRoomById,
  getRoomById,
  updateRoomById,
  sendMessage,
  getMessagesByRoomId,
  joinRoom,
  leaveRoom
}
