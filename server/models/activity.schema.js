const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('activity', ActivitySchema);
