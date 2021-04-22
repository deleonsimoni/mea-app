const mongoose = require('mongoose');

const FormationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  initialData: {
    type: String,
    required: true
  },
  finalDate: {
    type: String,
    required: true
  },
  institutionName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  advisor: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('formation', FormationSchema);
