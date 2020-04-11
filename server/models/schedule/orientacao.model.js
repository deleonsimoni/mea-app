const mongoose = require('mongoose');

const orientacaoSchema = new mongoose.Schema(
  {
    tese: [
      {
        id: Number,
        data: Date,
        title: String,
        linha: String,
        author: String,
        linkPdf: String
      }
    ]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Orientacao', orientacaoSchema);
