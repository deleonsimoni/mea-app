const mongoose = require('mongoose');

const ProfessionalActivitySchema = new mongoose.Schema({
  initialDate: {
    type: String
  },
  finalDate: {
    type: String
  },
  role: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model(
  'ProfessionalActivity',
  ProfessionalActivitySchema
);
