const mongoose = require('mongoose');

const CatagorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true, 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  }],
})

const Catagory = mongoose.model('Catagory', CatagorySchema)
module.exports = Catagory