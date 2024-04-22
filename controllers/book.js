const Book = require('../models/Book');

console.log('constroler book');


const getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();

    res.render('books', {title: 'Books', userId: userId, books: books});
}


module.exports = {
    getBooksList,
};