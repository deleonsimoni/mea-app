const About = require('../../models/schedule/about.model');

module.exports = {
  listSchedule,
  insertSchedule,
  updateSchedule,
  deleteSchedule
};

async function listSchedule(date) {
  return await About.find({
    date: date
  }).sort({
    date: -1
  });
}

async function insertSchedule(schedule) {
  return await new About(schedule).save();
}

async function updateSchedule(id, schedule) {
  return await About.findAndUpdate(id, schedule);
}

async function deleteSchedule(id) {
  return await About.findOneAndRemove({
    _id: id
  });
}
