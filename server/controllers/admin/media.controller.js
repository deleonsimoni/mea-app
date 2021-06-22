const Media = require('../../models/media.schema');
const S3Uploader = require('./../aws.controller');
const config = require('./../../config/config');

class MediaController {
  static async upload(file, type) {
    const archiveName = config.PATH_S3_DEV + type + '/' + file.name;

    try {
      await S3Uploader.uploadFile(archiveName, file.data);

      return archiveName;
    } catch (e) {
      console.log('Erro AWS: ', e);
    }
  }

  static async create(data, fileCover) {
    const media = JSON.parse(data.formulario);

    if (fileCover) {
      media.image = await this.upload(fileCover, 'img');
    }

    media.created = new Date();
    return new Media(media).save();
  }

  static list() {
    return Media.find({}, null, { sort: { created: -1 } });
  }

  static update(data) {
    data.created = new Date();
    return Media.update(data);
  }

  static delete(id) {
    return Media.deleteOne({ _id: id });
  }

  static updateAll() {
    return Media.updateMany({ $set: { created: new Date() } });
  }
}

module.exports = MediaController;
