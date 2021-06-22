const mongoose = require('mongoose');

const ReferenceLinkSchema = new mongoose.Schema({
  label: {
    type: String
  },
  link: {
    type: String
  },
  created: {
    type: Date
  }
});

module.exports = mongoose.model('referenceLink', ReferenceLinkSchema);
