const mongoose = require('mongoose');
const activity = require('./activity.schema').schema;

const FormationSchema = new mongoose.Schema({
  type: {
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
  },
  activities: [activity]
});

module.exports = mongoose.model('formation', FormationSchema);
