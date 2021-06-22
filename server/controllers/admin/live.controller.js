const Live = require('../../models/live.schema');

class LiveController {
  static create(data) {
    return new Live(data).save();
  }

  static list() {
    return Live.find({}, null, { sort: { created: -1 } });
  }

  static update(data) {
    return Live.update(data);
  }

  static delete(id) {
    return Live.deleteOne({ _id: id });
  }

  static updateAll() {
    return Live.updateMany({ $set: { created: new Date() } });
  }
}

module.exports = LiveController;
