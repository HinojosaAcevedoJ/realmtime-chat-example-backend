const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

async function withAuth(req, res, next) {
  const token = req.headers.authorization
  const splittedToken = token?.split(' ')
  if (!token || splittedToken[0] !== 'Bearer') {
    res.status(401).send({ message: 'Invalid Token' })
    return
  }
  try {
    const decoded = jwt.verify(splittedToken[1], JWT_SECRET)
    res.locals.decodedToken = decoded
    await next()
  } catch (err) {
    res.status(401).send({ message: err.message })
  }
}

module.exports = withAuth
