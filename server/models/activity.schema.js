const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('activity', ActivitySchema);
