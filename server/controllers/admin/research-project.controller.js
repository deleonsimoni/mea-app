const Project = require('../../models/project.schema');

class ProjectController {
  static create(data) {
    data.created = new Date();
    return new Project(data).save();
  }

  static list() {
    return Project.find({}, null, { sort: { created: -1 } });
  }

  static update(data) {
    data.created = new Date();
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
