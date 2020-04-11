const mongoose = require('mongoose');

const acervoSchema = new mongoose.Schema(
  {
    autorais: [
      {
        title: String,
        description: String,
        authors: [
          {
            id: Number,
            name: String
          }
        ],
        editora: String,
        comoCitar: String,
        imagemS3: String,
        arquivo: String,
        linkLoja: String,
        fontePdf: String,
        linkPdf: String,
        download: String,
        fonteIngles: String,
        linkIngles: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ],

    weblivros: [
      {
        title: String,
        description: String,
        authors: [
          {
            id: Number,
            name: String
          }
        ],
        editora: String,
        comoCitar: String,
        imagemS3: String,
        arquivo: String,
        linkLoja: String,
        fontePdf: String,
        linkPdf: String,
        download: String,
        fonteIngles: String,
        linkIngles: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ],

    organizados: [
      {
        title: String,
        description: String,
        authors: [
          {
            id: Number,
            name: String
          }
        ],
        editora: String,
        comoCitar: String,
        imagemS3: String,
        arquivo: String,
        linkLoja: String,
        fontePdf: String,
        linkPdf: String,
        download: String,
        fonteIngles: String,
        linkIngles: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ],

    internacionais: [
      {
        title: String,
        description: String,
        authors: [
          {
            id: Number,
            name: String
          }
        ],
        editora: String,
        comoCitar: String,
        imagemS3: String,
        arquivo: String,
        linkLoja: String,
        fontePdf: String,
        linkPdf: String,
        download: String,
        fonteIngles: String,
        linkIngles: String,
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

module.exports = mongoose.model('Acervo', acervoSchema);
