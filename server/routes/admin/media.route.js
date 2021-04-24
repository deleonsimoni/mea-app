const express = require('express');
const router = express.Router();

const MediaController = require('../../controllers/admin/media.controller');

router.get('/', async (req, res) => {
  const media = await MediaController.list();
  res.json(media);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await MediaController.create(body);

  res.json({
    status: 200,
    message: 'Mídia cadastrada com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await MediaController.update(body);

  res.json({
    status: 200,
    message: 'Mídia atualizada com sucesso!'
  });
});

router.delete('/:id', async (req, res) => {
  await MediaController.delete(req.params.id);

  res.json({
    status: 200,
    message: 'Mídia deletada com sucesso!'
  });
});

module.exports = router;
