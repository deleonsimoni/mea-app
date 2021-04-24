const Live = require('../../models/live.schema');

class LiveController {
  static create(data) {
    return new Live(data).save();
  }

  static list() {
    return Live.find();
  }

  static update(data) {
    return Live.update(data);
  }

  static delete(id) {
    return Live.deleteOne({ _id: id });
  }
}

module.exports = LiveController;
