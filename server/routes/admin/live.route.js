const express = require('express');
const router = express.Router();

const LiveController = require('../../controllers/admin/live.controller');

router.get('/', async (req, res) => {
  const lives = await LiveController.list();
  res.json(lives);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await LiveController.create(body);

  res.json({
    status: 200,
    message: 'Programação cadastrada com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await LiveController.update(body);

  res.json({
    status: 200,
    message: 'Programação atualizada com sucesso!'
  });
});

router.delete('/:id', async (req, res) => {
  await LiveController.delete(req.params.id);

  res.json({
    status: 200,
    message: 'Programação deletada com sucesso!'
  });
});

module.exports = router;
