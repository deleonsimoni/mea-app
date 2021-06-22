const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const asyncHandler = require('express-async-handler');
const passport = require('passport');

const CompletedGuidelinesController = require('../../controllers/admin/completed-guidelines.controller');

router.get('/', async (req, res) => {
  const guidelines = await CompletedGuidelinesController.list();
  res.json(guidelines);
});

router.post(
  '/',
  [
    passport.authenticate('jwt', {
      session: false
    }),
    fileUpload()
  ],
  asyncHandler(async (req, res) => {
    const body = JSON.parse(req.body.formulario);
    const archive = req.files ? req.files.fileArray : null;

    await CompletedGuidelinesController.create({ body, archive });

    res.json({
      status: 200,
      message: 'Orientação cadastrada com sucesso!'
    });
  })
);

router.put(
  '/',
  [
    passport.authenticate('jwt', {
      session: false
    }),
    fileUpload()
  ],
  asyncHandler(async (req, res) => {
    const body = req.body;
    const archive = req.files ? req.files.fileArray : null;

    await CompletedGuidelinesController.update(body, archive);

    res.json({
      status: 200,
      message: 'Orientação atualizada com sucesso!'
    });
  })
);

router.delete(
  '/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    await CompletedGuidelinesController.delete(req.params.id);

    res.json({
      status: 200,
      message: 'Orientação deletada com sucesso!'
    });
  })
);

router.post(
  '/update-all',
  passport.authenticate('jwt', {
    session: false
  }),
  asyncHandler(async (req, res) => {
    await CompletedGuidelinesController.updateAll();

    res.json({
      status: 200,
      message: 'Orientação atualizada com sucesso!'
    });
  })
);

module.exports = router;
