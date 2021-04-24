const mongoose = require('mongoose');

const ProfessionalActivitySchema = new mongoose.Schema({
  initialDate: {
    type: String,
    required: true
  },
  finalDate: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model(
  'ProfessionalActivity',
  ProfessionalActivitySchema
);
