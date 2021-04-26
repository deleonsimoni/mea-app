const Book = require('../../models/book.schema');
const S3Uploader = require('./../aws.controller');
const config = require('./../../config/config');

class BookController {
  static async create(data, fileCapa, fileBook) {
    console.log(data, fileCapa, fileBook);

    const book = JSON.parse(data.formulario);

    let haErro = false;
    let fileName;

    if (fileCapa) {
      fileName = config.PATH_S3_DEV + 'img/' + fileCapa.name;
      await S3Uploader.uploadFile(fileName, fileCapa.data).then(
        fileData => {
          book.image = fileName;
        },
        err => {
          console.log('Erro ao enviar imagem para AWS: ' + fileName);
          haErro = true;
        }
      );
    }

    if (fileBook) {
      fileName = config.PATH_S3_DEV + 'pdfs/' + fileBook.name;
      await S3Uploader.uploadFile(fileName, fileBook.data).then(
        fileData => {
          book.archive = fileName;
        },
        err => {
          console.log('Erro ao enviar imagem para AWS: ' + fileName);
          haErro = true;
        }
      );
    }

    if (!haErro) {
      return new Book(book).save();
    }
  }

  static list() {
    return Book.find();
  }

  static update(data) {
    return Book.update(data);
  }

  static delete(id) {
    return Book.deleteOne({ _id: id });
  }
}

module.exports = BookController;
