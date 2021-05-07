const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    authors: {
      type: String
    },
    publishingCompany: {
      type: String
    },
    image: {
      type: String
    },
    linkOfStore: {
      type: String
    },
    linkOfBook: {
      type: String
    },
    archive: {
      type: String
    },
    type: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Book', BookSchema);
