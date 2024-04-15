const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const homeRouter = require('./routes/home');
const booksRouter = require('./routes/book');
const authorsRouter = require('./routes/author');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(homeRouter);
app.use(booksRouter);
app.use(authorsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
});
