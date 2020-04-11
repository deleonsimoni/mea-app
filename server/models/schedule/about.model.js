const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    title1: {
      type: String,
      required: true
    },
    formation: [
      {
        id: Number,
        name: String,
        date: Date,
        local: String,
        theme: String,
        area: String,
        sector: String,
        level: String,
        professor: String
      }
    ],
    performance: [
      {
        id: Number,
        local: String,
        instlink: {
          dateini: Date,
          datefim: Date,
          title: String,
          content: String
        }
      }
    ],
    activities: [
      {
        id: Number,
        dateactiv: Date,
        activity: String,
        function: String
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('About', aboutSchema);
