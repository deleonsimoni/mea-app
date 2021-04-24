const Media = require('../../models/media.schema');

class MediaController {
  static create(data) {
    return new Media(data).save();
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
