const mongoose = require('mongoose')
require('dotenv').config();

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/Book-Shelf"
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Category: require('./category'),
    User: require('./user'),
    Book: require('./book'),
}