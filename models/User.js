const mongoose = require('../db/connection.js')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
  local: {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    }
  }
})

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = (password, user) => {
  return bcrypt.compareSync(password, user.local.password)
}

module.exports = mongoose.model('User', userSchema)
