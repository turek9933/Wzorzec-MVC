const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('In progress...');
});

app.use((req, res, next) => {
    res.status(404);
    res.send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
});
