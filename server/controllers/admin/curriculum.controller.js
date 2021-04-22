const Curriculum = require('../../models/curriculum.schema');

class CurriculumController {
  static create(data) {
    return new Curriculum(data).save();
  }

  static list() {
    return Curriculum.find();
  }

  static update(data) {
    return Curriculum.update(data);
  }
}

module.exports = CurriculumController;
