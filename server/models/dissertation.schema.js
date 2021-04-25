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
    type: {
      type: Number
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Dissertation', DissertationSchema);
