const { Router } = require('express')
const { login, signup } = require('../controllers')

const routes = new Router()

routes.post('/signup', signup)

routes.post('/login', login)

module.exports = routes
