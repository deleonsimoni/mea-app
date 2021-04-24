const mongoose = require('mongoose');
const formation = require('./formation.schema').schema;
const referenceLink = require('./reference-link.schema').schema;
const professionalPerformance = require('./professional-performance').schema;

const CurriculumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    profileLinks: [referenceLink],
    formations: [formation],
    professionalPerformances: [professionalPerformance]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Curriculum', CurriculumSchema);
