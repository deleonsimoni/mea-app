const bcrypt = require('bcrypt');
//const Joi = require('joi');
const User = require('../models/user.model');
//const Work = require('../models/work.model');
const userCtrl = require('../controllers/user.controller');

//const Prices = require('../config/prices');
const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const S3Uploader = require('./aws.controller');

const paginate = require('jw-paginate');

module.exports = {
  getUsers,
  deleteByEmail,
  getWorks,
  editUser,
  removeWork
};

async function getUsers(req) {
  const pageSize = 10;
  const page = req.query.page || 1;
  let usersFound = [];
  console.log(req.query.search);
  let search = JSON.parse(req.query.search);
  search.icAdmin = false;

  usersFound = await User.find(search)
    .select(
      'fullname email createdAt document phones modalityId payment works institution isPCD deficiencyType icForeign'
    )
    .sort({ fullname: 1 })
    .skip(pageSize * page - pageSize)
    .limit(pageSize);

  numbOfUsers = await User.count(search);

  const pager = paginate(numbOfUsers, page, pageSize);

  return { usersFound, pager };
}

async function editUser(user) {
  return await User.findOneAndUpdate({ _id: user._id }, user, { upsert: true });
}

async function deleteByEmail(emailDelete) {
  return await User.findOneAndRemove({ email: emailDelete }, function(
    err,
    doc
  ) {
    if (err) {
      console.log('erro ao deletar o usuario: ' + emailDelete, err);
    } else {
      console.log('Usuário deletado com sucesso: ' + emailDelete);
    }
  });
}

async function getWorks(axis) {
  return await Work.find({ axisId: axis });
}

async function removeWork(req) {
  return await Work.findByIdAndRemove({ _id: req.params.id }, function(
    err,
    doc
  ) {
    if (err) {
      console.log('erro ao remover trabalho: ', err);
    } else {
      for (let author of doc.authors) {
        User.findOneAndUpdate(
          { _id: author.userId },
          { $pull: { works: req.params.id } },
          function(err, doc) {
            if (err) {
              console.log('Erro ao remover trabalho do usuario ', err);
            } else {
              console.log('Sucesso ao remover o trabalho: ', err);
            }
          }
        );
      }
    }
  });
}
