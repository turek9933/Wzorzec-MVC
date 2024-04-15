const Author = require('../models/author');

let authors = [];
let freeId = 0;

authors.push(new Author(freeId++, 'Fryderyk Nienicze'));

const getAuthorsView = (req, res) => {
    res.render('authors', {pageTitle: 'Authors List', authors: authors});
};

module.exports = {
    getAuthorsView,
}