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
    return Dissertation.find({}, null, { sort: { created: -1 } });
  }

  static async update(data, file) {
    const dissertation = JSON.parse(data.formulario);

    if (file) {
      dissertation.archive = await this.upload(file);
      dissertation.link = null;
    }

    if (dissertation.link) {
      dissertation.archive = null;
    }

    const id = dissertation._id;
    delete dissertation._id;

    return Dissertation.update({ _id: id }, dissertation, { upsert: true });
  }

  static delete(id) {
    return Dissertation.deleteOne({ _id: id });
  }

  static updateAll() {
    return Dissertation.updateMany({ $set: { created: new Date() } });
  }
}

module.exports = CompletedGuidelinesController;
