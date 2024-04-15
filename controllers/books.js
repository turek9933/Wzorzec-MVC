const Book = require('../models/book');

let books = [];
let freeId = 0;

const getBooksView = (req, res) => {
    res.render('books', {pageTitle: 'Books List', books: books});
};

const getAddBookView = (req, res) => {
    res.render('add-book', {pageTitle: 'Add Book'});
};

const postAddBook = (req, res) => {
    const {title, publishingYear, authorId} = req.body;
    const bookToPush = new Book(freeId++, title, publishingYear, authorId);
    books.push(bookToPush);
    res.redirect('/book/list');
};

const postDeleteBook = (req, res) => {
    const {id} = req.params;
    const fixedId = parseInt(id);
    books = books.filter((book) => book.id !== fixedId);
    res.redirect('/book/list');
}

module.exports = {
    getBooksView,
    getAddBookView,
    postAddBook,
    postDeleteBook,
}