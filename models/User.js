class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return users;
    }
}

const users = [
    new User(1, 'Adam'),
    new User(2, 'Kasia'),
    new User(3, 'Paulina'),
    new User(4, 'Karolina'),
    new User(5, 'Tadeusz')
];

module.exports = {User};