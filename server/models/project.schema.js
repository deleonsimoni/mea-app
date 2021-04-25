const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    topics: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    searchGroup: {
      type: String,
      required: true
    },
    financing: {
      type: String,
      required: true
    },
    keywords: {
      type: Array,
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Project', ProjectSchema);
