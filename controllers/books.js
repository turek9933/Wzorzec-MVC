const Book = require('../models/book');

let books = [];
let freeId = 0;

books.push(new Book(freeId++, 'O obrotach cial zielonych', 1969, 1));

const getBooksView = (req, res) => {
    res.render('books', {pageTitle: 'Books List', books: books});
};

module.exports = {
    getBooksView,
}