const mongoose = require('mongoose');

const sitesSchema = new mongoose.Schema(
  {
    sites: [
      {
        id: Number,
        title: String,
        description: String,
        link: String
      }
    ]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Sites', sitesSchema);
