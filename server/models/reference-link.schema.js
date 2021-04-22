const mongoose = require('mongoose');

const ReferenceLinkSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('referenceLink', ReferenceLinkSchema);
