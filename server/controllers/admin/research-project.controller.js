const Project = require('../../models/project.schema');

class ProjectController {
  static create(data) {
    return new Project(data).save();
  }

  static list() {
    return Project.find();
  }

  static update(data) {
    return Project.update(data);
  }

  static delete(id) {
    return Project.deleteOne({ _id: id });
  }
}

module.exports = ProjectController;
