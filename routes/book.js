const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/book/list', booksController.getBooksView);

module.exports = router;