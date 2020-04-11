const mongoose = require('mongoose');

const projetoSchema = new mongoose.Schema(
  {
    projeto: [
      {
        id: Number,
        datainicio: Date,
        Datafim: Date,
        name: String,
        linha: String,
        grupo: String,
        financiamento: String,
        resumo: String,
        objgeral: String,

        objespecifico: [
          {
            id: Number,
            obj: String
          }
        ],
        palavras: [
          {
            id: Number,
            name: String
          }
        ],
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Projeto', projetoSchema);
