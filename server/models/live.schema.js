const mongoose = require('mongoose');

const LiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    institution: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Live', LiveSchema);
