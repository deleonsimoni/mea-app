const Dissertation = require('../../models/dissertation.schema');
const S3Uploader = require('./../aws.controller');
const config = require('./../../config/config');

class CompletedGuidelinesController {
  static async upload(file) {
    const archiveName = config.PATH_S3_DEV + 'pdfs/' + file.name;

    try {
      await S3Uploader.uploadFile(archiveName, file.data);

      return archiveName;
    } catch (e) {
      console.log('Erro AWS: ', e);
    }
  }

  static async create(data) {
    const dissertation = data.body;
    const file = data.archive;

    if (file) {
      dissertation.archive = await this.upload(file);
      dissertation.link = null;
    } else {
      dissertation.archive = null;
    }

    return new Dissertation(dissertation).save();
  }

  static list() {
    return Dissertation.find();
  }

  static async update(data) {
    const dissertation = data.body;
    const file = data.archive;

    if (file) {
      dissertation.archive = await this.upload(file);
      dissertation.link = null;
    } else {
      dissertation.archive = null;
    }

    console.log(dissertation);
    return Dissertation.update(dissertation);
  }

  static delete(id) {
    return Dissertation.deleteOne({ _id: id });
  }
}

module.exports = CompletedGuidelinesController;
