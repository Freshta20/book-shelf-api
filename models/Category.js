const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
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

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category