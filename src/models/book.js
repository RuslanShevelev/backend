const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  publication: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('book', bookSchema);