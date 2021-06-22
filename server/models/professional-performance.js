const mongoose = require('mongoose');
const job = require('./job.schema').schema;
const professionalActivity = require('./professional-activity').schema;

const ProfessionalPerformanceSchema = new mongoose.Schema(
  {
    institution: {
      type: String
    },
    jobs: [job],
    activities: [professionalActivity],
    created: {
      type: Date
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model(
  'ProfessionalPerformance',
  ProfessionalPerformanceSchema
);
