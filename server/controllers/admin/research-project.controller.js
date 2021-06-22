const Project = require('../../models/project.schema');

class ProjectController {
  static create(data) {
    return new Project(data).save();
  }

  static list() {
    return Project.find({}, null, { sort: { created: -1 } });
  }

  static update(data) {
    return Project.update(data);
  }

  static delete(id) {
    return Project.deleteOne({ _id: id });
  }

  static updateAll() {
    return Project.updateMany({ $set: { created: new Date() } });
  }
}

module.exports = ProjectController;
