const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    link: {
      type: String
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
