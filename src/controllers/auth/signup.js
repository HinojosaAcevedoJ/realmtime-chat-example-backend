const bcrypt = require('bcryptjs')
const Auth = require('../../validations/AuthModelSchema')

const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const data = new Auth({
    ...req.body,
    password: hashed,
    permission: '1'
  })
  const response = await data.save()
  if (response) {
    res.status(200).json({ message: 'Cuenta creada con éxito' })
  } else {
    res.status(500).json({ message: 'Internal Error' })
  }
}

module.exports = signup
