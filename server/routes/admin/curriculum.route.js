const express = require('express');
const router = express.Router();

const CurriculumController = require('../../controllers/admin/curriculum.controller');

router.get('/', async (req, res) => {
  const curriculum = await CurriculumController.list();
  res.json(curriculum);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await CurriculumController.create(body);

  res.json({
    status: 200,
    message: 'Currículo cadastrado com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await CurriculumController.update(body);

  res.json({
    status: 200,
    message: 'Currículo atualizado com sucesso!'
  });
});

module.exports = router;
