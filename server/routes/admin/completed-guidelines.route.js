const express = require('express');
const router = express.Router();

const CompletedGuidelinesController = require('../../controllers/admin/completed-guidelines.controller');

router.get('/', async (req, res) => {
  const guidelines = await CompletedGuidelinesController.list();
  res.json(guidelines);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await CompletedGuidelinesController.create(body);

  res.json({
    status: 200,
    message: 'Orientação cadastrada com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await CompletedGuidelinesController.update(body);

  res.json({
    status: 200,
    message: 'Orientação atualizada com sucesso!'
  });
});

router.delete('/:id', async (req, res) => {
  await CompletedGuidelinesController.delete(req.params.id);

  res.json({
    status: 200,
    message: 'Orientação deletada com sucesso!'
  });
});

module.exports = router;
