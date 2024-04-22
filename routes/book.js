const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

console.log('router book');

router.get('/', bookController.getBooksList);

module.exports = router;