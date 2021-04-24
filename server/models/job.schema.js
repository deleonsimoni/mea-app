const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  initialDate: {
    type: String,
    required: true
  },
  finalDate: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Job', JobSchema);
