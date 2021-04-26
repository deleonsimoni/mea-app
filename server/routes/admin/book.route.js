const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

const BookController = require('../../controllers/admin/book.controller');

router.get('/', async (req, res) => {
  const books = await BookController.list();
  res.json(books);
});

router.post('/', [fileUpload()], async (req, res) => {
  const body = req.body;
  const fileCapa = req.files.fileArray[0] || null;
  const fileBook = req.files.fileArray[1] || null;
  await BookController.create(body, fileCapa, fileBook);

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
