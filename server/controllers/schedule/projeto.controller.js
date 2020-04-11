const Projeto = require('../../models/schedule/projeto.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Projeto.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Projeto(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Projeto.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Projeto.findOneAndRemove({
    _id: id
  });
}
