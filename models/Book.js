class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return books;
    }
}

const books = [
    new Book(1, '1984', 'George Orwell', 1949),
    new Book(2, 'Folwark Zwierzecy', 'George Orwell', 1945),
    new Book(3, 'Alicja z Krainy czarów', 'George Orwell', 1234),
    new Book(4, 'Pan Tadeusz', 'Adam Mickiewicz', 1834),
    new Book(5, 'Zemsta', 'Adam Mickiewicz', 1834),
];

module.exports = Book;