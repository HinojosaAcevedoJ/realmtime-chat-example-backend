const { Router } = require('express')
const {
  createRoom,
  getRooms,
  getMessagesByRoomId,
  joinRoom,
  sendMessage,
  deleteRoomById,
  updateRoomById,
  leaveRoom
} = require('../controllers')

const withAuth = require('../middlewares/withAuth')
const isMember = require('../middlewares/isMember')
const verifyOwnership = require('../middlewares/verifyOwnership')

const routes = new Router()

routes.get('/', withAuth, getRooms)

routes.get('/:roomId/messages', withAuth, getMessagesByRoomId)

routes.post('/', withAuth, createRoom)

routes.post('/:roomId/join', withAuth, joinRoom)

routes.post('/:roomId/messages', withAuth, isMember, sendMessage)

routes.delete('/:roomId', withAuth, verifyOwnership, deleteRoomById)

routes.put('/:roomId', withAuth, verifyOwnership, updateRoomById)

routes.post('/:roomId/leave', withAuth, leaveRoom)

module.exports = routes
