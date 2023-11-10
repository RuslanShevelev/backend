const mongoose = require("mongoose");

const readerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
  },
  userName: {
    type: String,
    required: true,
    minLength: 5,
  },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
    default: [],
  }
});

module.exports = mongoose.model('reader', readerSchema);