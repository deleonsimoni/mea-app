const mongoose = require('mongoose');

const ReferenceLinkSchema = new mongoose.Schema({
  label: {
    type: String
  },
  link: {
    type: String
  }
});

module.exports = mongoose.model('referenceLink', ReferenceLinkSchema);
