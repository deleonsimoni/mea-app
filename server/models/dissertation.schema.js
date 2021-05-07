const mongoose = require('mongoose');

const DissertationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    category: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    link: {
      type: String
    },
    archive: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Dissertation', DissertationSchema);
