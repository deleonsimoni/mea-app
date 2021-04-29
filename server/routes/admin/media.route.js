const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const passport = require('passport');

const MediaController = require('../../controllers/admin/media.controller');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const media = await MediaController.list();
    res.json(media);
  })
);

router.post(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    const body = req.body;
    await MediaController.create(body);

    res.json({
      status: 200,
      message: 'Mídia cadastrada com sucesso!'
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
    await MediaController.update(body);

    res.json({
      status: 200,
      message: 'Mídia atualizada com sucesso!'
    });
  })
);

router.delete(
  '/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    await MediaController.delete(req.params.id);

    res.json({
      status: 200,
      message: 'Mídia deletada com sucesso!'
    });
  })
);

module.exports = router;
