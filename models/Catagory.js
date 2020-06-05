const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
  catagories: {
    type: String,
    required: true, 
  },
})

const Catagory = mongoose.model('Catagory', CatagorySchema)
module.exports = Catagory