const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/admin/book.controller');

router.get('/', async (req, res) => {
  const books = await BookController.list();
  res.json(books);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await BookController.create(body);

  res.json({
    status: 200,
    message: 'Livro cadastrado com sucesso!'
  });
});

router.put('/', async (req, res) => {
  const body = req.body;
  await BookController.update(body);

  res.json({
    status: 200,
    message: 'Livro atualizado com sucesso!'
  });
});

router.delete('/:id', async (req, res) => {
  await BookController.delete(req.params.id);

  res.json({
    status: 200,
    message: 'Livro deletado com sucesso!'
  });
});

module.exports = router;
