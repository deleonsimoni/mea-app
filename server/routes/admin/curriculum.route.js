const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const passport = require('passport');

const CurriculumController = require('../../controllers/admin/curriculum.controller');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const curriculum = await CurriculumController.list();
    res.json(curriculum);
  })
);

router.post(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    const body = req.body;
    console.log(body);
    await CurriculumController.create(body);

    res.json({
      status: 200,
      message: 'Currículo cadastrado com sucesso!'
    });
  })
);

router.put(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    const body = req.body;
    await CurriculumController.update(body);

    res.json({
      status: 200,
      message: 'Currículo atualizado com sucesso!'
    });
  })
);

module.exports = router;
