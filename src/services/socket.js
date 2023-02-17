const socketIO = require('socket.io')

function init(server) {
  const io = socketIO(server)

  if (!io) {
    throw new Error('Socket.io not initialized')
  } else {
    io.on('connection', socket => {
      console.log(`${socket.id} ha conectado`)

      socket.on('joinRoom', (roomId, userId) => {
        socket.join(roomId)
        console.log(`${socket.id} ha entrado a la sala ${roomId}`)

        socket.to(roomId).emit('userJoined', userId)
      })

      socket.on('leaveRoom', (roomId, userId) => {
        socket.leave(roomId)
        console.log(`${socket.id} ha abandonado la sala ${roomId}`)

        socket.to(roomId).emit('userLeft', userId)
      })

      socket.on('disconnect', () => {
        console.log(`${socket.id} se ha desconectado`)
      })
    })
  }
}

module.exports = {
  init,
}
