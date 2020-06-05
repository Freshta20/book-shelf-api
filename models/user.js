const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true, 
  },
  email: {
    type: String,
    unique: true,
    required: true, 
    trim: true,
  },
  password: {
    type: String,
    unique: true,
    required: true, 
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }],
})

const User = mongoose.model('User', UserSchema)
module.exports = User