const Midia = require('../../models/schedule/midia.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Midia.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Midia(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Midia.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Midia.findOneAndRemove({
    _id: id
  });
}
