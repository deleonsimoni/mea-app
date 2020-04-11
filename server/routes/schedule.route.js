const express = require('express');
const passport = require('passport');

const aboutCtrl = require('../controllers/schedule/about.controller');
const acervoCtrl = require('../controllers/schedule/acervo.controller');
const artigoCtrl = require('../controllers/schedule/artigo.controller');
const midiaCtrl = require('../controllers/schedule/midia.controller');
const orientacaoCtrl = require('../controllers/schedule/orientacao.controller');
const projetoCtrl = require('../controllers/schedule/projeto.controller');
const sitesCtrl = require('../controllers/schedule/sites.controller');

const router = express.Router();

module.exports = router;

router.get('/:idType?date=:data', listSchedule);

router.post(
  '/:idType',
  passport.authenticate('jwt', {
    session: false
  }),
  insertSchedule
);

router.put(
  '/:idType/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  updateSchedule
);

router.put(
  '/:idType?id=:id',
  passport.authenticate('jwt', {
    session: false
  }),
  deleteSchedule
);

async function listSchedule(req, res) {
  let schedules;

  switch (Number(req.params.idType)) {
    case 1:
      schedules = await aboutCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 2:
      schedules = await projetoCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 3:
      schedules = await orientacaoCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 4:
      schedules = await sitesCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 5:
      schedules = await acervoCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 6:
      schedules = await midiaCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
    case 7:
      schedules = await artigoCtrl.listSchedule(req.query.data);
      res.json(schedules);
      break;
  }
}

async function insertSchedule(req, res) {
  if (!user.icAdmin) {
    res.sendStatus(401);
  } else {
    req.body.user = req.user._id;
    let schedules;
    switch (Number(req.params.idType)) {
      case 1:
        schedules = await aboutCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 2:
        schedules = await projetoCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 3:
        schedules = await orientacaoCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 4:
        schedules = await sitesCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 5:
        schedules = await acervoCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 6:
        schedules = await midiaCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
      case 7:
        schedules = await artigoCtrl.insertSchedule(req.body);
        res.json(schedules);
        break;
    }
  }
}

async function updateSchedule(req, res) {
  if (!user.icAdmin) {
    res.sendStatus(401);
  } else {
    req.body.user = req.user._id;
    let schedules;
    switch (Number(req.params.idType)) {
      case 1:
        schedules = await aboutCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
      case 2:
        schedules = await projetoCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
      case 3:
        schedules = await orientacaoCtrl.updateSchedule(
          req.params.id,
          req.body
        );
        res.json(schedules);
        break;
      case 4:
        schedules = await sitesCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
      case 5:
        schedules = await acervoCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
      case 6:
        schedules = await midiaCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
      case 7:
        schedules = await artigoCtrl.updateSchedule(req.params.id, req.body);
        res.json(schedules);
        break;
    }
  }
}

async function deleteSchedule(req, res) {
  if (!user.icAdmin) {
    res.sendStatus(401);
  } else {
    let schedules;

    switch (Number(req.params.idType)) {
      case 1:
        schedules = await aboutCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 2:
        schedules = await projetoCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 3:
        schedules = await orientacaoCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 4:
        schedules = await sitesCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 5:
        schedules = await acervoCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 6:
        schedules = await midiaCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
      case 7:
        schedules = await artigoCtrl.deleteSchedule(req.query.id);
        res.json(schedules);
        break;
    }
  }
}
