const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const asyncHandler = require('express-async-handler');

const CompletedGuidelinesController = require('../../controllers/admin/completed-guidelines.controller');

router.get('/', async (req, res) => {
  const guidelines = await CompletedGuidelinesController.list();
  res.json(guidelines);
});

router.post(
  '/',
  [fileUpload()],
  asyncHandler(async (req, res) => {
    const body = req.body;
    const archive = req.files.fileArray || null;
    await CompletedGuidelinesController.create({ body, archive });

    res.json({
      status: 200,
      message: 'Orientação cadastrada com sucesso!'
    });
  })
);

router.put(
  '/',
  asyncHandler(async (req, res) => {
    const body = req.body;
    await CompletedGuidelinesController.update(body);

    res.json({
      status: 200,
      message: 'Orientação atualizada com sucesso!'
    });
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    await CompletedGuidelinesController.delete(req.params.id);

    res.json({
      status: 200,
      message: 'Orientação deletada com sucesso!'
    });
  })
);

module.exports = router;
