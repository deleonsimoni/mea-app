const mongoose = require('mongoose');

const midiaSchema = new mongoose.Schema(
  {
    filmes: [
      {
        titulo: String,
        Descrição: String,
        Imagem: String,
        link: String
      }
    ],
    series: [
      {
        titulo: String,
        Descrição: String,
        Imagem: String,
        link: String
      }
    ],
    aulas: [
      {
        titulo: String,
        Descrição: String,
        Imagem: String,
        link: String
      }
    ],
    entrevistas: [
      {
        titulo: String,
        Descrição: String,
        Imagem: String,
        link: String
      }
    ],
    apresentacoes: {
      titulo: String,
      link: String
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  },

  {
    versionKey: false
  }
);

module.exports = mongoose.model('Midia', midiaSchema);
