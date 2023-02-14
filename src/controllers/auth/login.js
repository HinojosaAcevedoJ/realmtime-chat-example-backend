const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env
const Auth = require('../../validations/AuthModelSchema')

const login = async (req, res) => {
  Auth.findOne({
    user: req.body.user
  }).exec(async (err, data) => {
    if (err) {
      res.status(500).json({ message: err })
    }
    if (!data) {
      res.status(401).json({ message: 'usuario o contraseña incorrectos' })
    }
    if (data) {
      const item = data
      const permissionLvl = item.permissions
      const isCorrect = await bcrypt.compare(req.body.password || '', item?.password || '')
      if (!isCorrect) {
        res.status(401).json({ message: 'usuario o contraseña incorrectos' })
      }
      const token = jwt.sign({ sub: item.user }, JWT_SECRET, { expiresIn: '7d' })
      res.send({ token, permissionLvl })
    }
  })
}

module.exports = login
