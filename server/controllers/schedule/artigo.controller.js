const Artigo = require('../../models/schedule/artigo.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Artigo.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Artigo(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Artigo.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Artigo.findOneAndRemove({
    _id: id
  });
}
