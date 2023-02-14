const { Router } = require('express')
const {
  createRoom,
  getRooms,
  getMessagesByRoomId,
  joinRoom,
  sendMessage
} = require('../controllers')

const withAuth = require('../middlewares/withAuth')
const isMember = require('../middlewares/isMember')

const routes = new Router()

routes.get('/', withAuth, getRooms)

routes.get('/:roomId/messages', withAuth, getMessagesByRoomId)

routes.post('/', withAuth, createRoom)

routes.post('/:roomId/join', withAuth, joinRoom)

routes.post('/:roomId/messages', withAuth, isMember, sendMessage)

module.exports = routes
