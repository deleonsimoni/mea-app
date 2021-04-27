const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  initialDate: {
    type: String
  },
  finalDate: {
    type: String
  },
  occupation: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Job', JobSchema);
