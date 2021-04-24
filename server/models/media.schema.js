const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Media', MediaSchema);
