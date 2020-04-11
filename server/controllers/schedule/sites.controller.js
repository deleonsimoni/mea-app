const Sites = require('../../models/schedule/sites.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await Sites.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new Sites(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await Sites.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await Sites.findOneAndRemove({
    _id: id
  });
}
