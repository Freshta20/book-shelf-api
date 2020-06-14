const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
  },
  note: {
    type: String,
  },
  cover: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book;