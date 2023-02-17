require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const morgan = require('morgan')
const mongoose = require('mongoose')

const auth = require('./routes/auth')
const rooms = require('./routes/rooms')
const socketIO = require('./services/socket')

const { URL_MONGODB } = process.env
const app = express()
const PORT = process.env.PORT || 4000
const server = http.createServer(app)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
  .set('strictQuery', false)
  .connect(URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.use(cors({ origin: '*' }))
    app.use(cors({
      methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
    }))
    app.use('/rooms', rooms)
    app.use('/auth', auth)
    socketIO.init(server)
    app.listen(PORT, () => {
      console.log('El servidor está inicializado en el puerto 4000')
    })
  })
