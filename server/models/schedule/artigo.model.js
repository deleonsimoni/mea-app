const mongoose = require('mongoose');

const artigoSchema = new mongoose.Schema(
  {
    artigos: [
      {
        titulo: String,
        Descrição: String,
        Imagem: String,
        link: String
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

module.exports = mongoose.model('Artigo', artigoSchema);
