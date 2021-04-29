const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const ResearchProjectController = require('../../controllers/admin/research-project.controller');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const projects = await ResearchProjectController.list();
    res.json(projects);
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const body = req.body;
    await ResearchProjectController.create(body);

    res.json({
      status: 200,
      message: 'Projeto cadastrado com sucesso!'
    });
  })
);

router.put(
  '/',
  asyncHandler(async (req, res) => {
    const body = req.body;
    await ResearchProjectController.update(body);

    res.json({
      status: 200,
      message: 'Projeto atualizado com sucesso!'
    });
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    await ResearchProjectController.delete(req.params.id);

    res.json({
      status: 200,
      message: 'Projeto deletado com sucesso!'
    });
  })
);

module.exports = router;
