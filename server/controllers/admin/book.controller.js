const Book = require('../../models/book.schema');
const S3Uploader = require('./../aws.controller');
const config = require('./../../config/config');

class BookController {
  static async upload(file, type) {
    const archiveName = config.PATH_S3_DEV + type + '/' + file.name;

    try {
      await S3Uploader.uploadFile(archiveName, file.data);

      return archiveName;
    } catch (e) {
      console.log('Erro AWS: ', e);
    }
  }

  static async create(data, fileCapa, fileBook) {
    const book = JSON.parse(data.formulario);

    if (fileCapa) {
      book.image = await this.upload(fileCapa, 'img');
    }

    if (fileBook) {
      book.archive = await this.upload(fileBook, 'pdfs');
    }

    return new Book(book).save();
  }

  static list() {
    return Book.find();
  }

  static async update(data, fileCapa, fileBook) {
    const book = JSON.parse(data.formulario);

    if (fileCapa) {
      book.image = await this.upload(fileCapa, 'img');
    }

    if (fileBook) {
      book.archive = await this.upload(fileBook, 'pdfs');
    }

    return Book.update(book);
  }

  static delete(id) {
    return Book.deleteOne({ _id: id });
  }
}

module.exports = BookController;
