const Dissertation = require('../../models/dissertation.schema');

class CompletedGuidelinesController {
  static create(data) {
    return new Dissertation(data).save();
  }

  static list() {
    return Dissertation.find();
  }

  static update(data) {
    return Dissertation.update(data);
  }

  static delete(id) {
    return Dissertation.deleteOne({ _id: id });
  }
}

module.exports = CompletedGuidelinesController;
