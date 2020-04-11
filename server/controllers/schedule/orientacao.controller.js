const Orientacao = require('../../models/schedule/orientacao.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Orientacao.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Orientacao(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Orientacao.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Orientacao.findOneAndRemove({
    _id: id
  });
}
