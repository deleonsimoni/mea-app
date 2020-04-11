const Acervo = require('../../models/schedule/acervo.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Acervo.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Acervo(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Acervo.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Acervo.findOneAndRemove({
    _id: id
  });
}
