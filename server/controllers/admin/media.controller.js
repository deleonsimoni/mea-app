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

    return new Media(media).save();
  }

  static list() {
    return Media.find();
  }

  static update(data) {
    return Media.update(data);
  }

  static delete(id) {
    return Media.deleteOne({ _id: id });
  }
}

module.exports = MediaController;
