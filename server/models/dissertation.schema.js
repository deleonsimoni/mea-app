const mongoose = require('mongoose');

const DissertationSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String
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
    },
    created: {
      type: Date
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Dissertation', DissertationSchema);
