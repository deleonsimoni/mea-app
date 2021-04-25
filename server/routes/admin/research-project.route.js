const express = require('express');
const router = express.Router();

const ResearchProjectController = require('../../controllers/admin/research-project.controller');

router.get('/', async (req, res) => {
  const projects = await ResearchProjectController.list();
  res.json(projects);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await ResearchProjectController.create(body);

  res.json({
    status: 200,
    message: 'Programação cadastrada com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await ResearchProjectController.update(body);

  res.json({
    status: 200,
    message: 'Programação atualizada com sucesso!'
  });
});

router.delete('/:id', async (req, res) => {
  await ResearchProjectController.delete(req.params.id);

  res.json({
    status: 200,
    message: 'Programação deletada com sucesso!'
  });
});

module.exports = router;
