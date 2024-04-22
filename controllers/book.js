const Book = require('../models/Book');


const getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();

    res.render('books', {title: 'Books', userId: userId, books: books});
}

const getBookDetails = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getAll().find(b => b.id === parseInt(bookId));
    const user = User.getAll().find(u => u.id === userId);
    const didUserBorrowTheBook = user ? user.findBorrowedBookById(bookId) : false;

    res.render('book-details', {book: book, didUserBorrowTheBook: didUserBorrowTheBook});
}

const postBookBorrow = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const user = User.getAll().find(u => u.id === userId);
    const book = Book.getAll().find(b => b.id === parseInt(bookId));

    if (book.available && user) {
        book.available = false;
        user.borrowBook(book);
        res.redirect('/books/borrow/success');
    }
}

const getBookBorrowSuccess = (req, res) => {
    res.render('success', {message: 'Book borrowed successfully'});
}

const postBookReturn = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const user = User.getAll().find(u => u.id === userId);
    const book = Book.getAll().find(b => b.id === parseInt(bookId));

    if (!book.available && user && user.findBorrowedBookById(bookId)) {
        book.available = true;
        user.returnBook(bookId);
        res.redirect('/books/return/success');
    }
}

const getBookReturnSuccess = (req, res) => {
    res.render('success', {message: 'Book returned successfully'});
}



module.exports = {
    getBooksList,
    getBookDetails,
    postBookBorrow,
    getBookBorrowSuccess,
    postBookReturn,
    getBookReturnSuccess
};