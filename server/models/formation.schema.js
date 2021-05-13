const mongoose = require('mongoose');
const activity = require('./activity.schema').schema;

const FormationSchema = new mongoose.Schema({
  type: {
    type: String
  },
  institutionName: {
    type: String
  },
  title: {
    type: String
  },
  grade: {
    type: String
  },
  advisor: {
    type: String
  },
  activitySections: {
    type: String
  },
  levelOfEducation: {
    type: String
  }
});

module.exports = mongoose.model('formation', FormationSchema);
