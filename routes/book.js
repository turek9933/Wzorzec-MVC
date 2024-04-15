const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/book/list', booksController.getBooksView);

router.get('/book/add', booksController.getAddBookView);

router.post('/book/add', booksController.postAddBook);

router.post('/book/delete/:id', booksController.postDeleteBook);

module.exports = router;