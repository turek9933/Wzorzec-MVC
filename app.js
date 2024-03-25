const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().toString();
  console.log(`Request ${method} on path ${url} ${date}`);
  next();
});

app.use(express.urlencoded({extended: true}));

let students = [];

app.get('/home', (req, res) => {
  res.sendFile('views/home.html', {root: __dirname});
});

app.post('/student', (req, res) => {
    const {firstName, lastName, fieldOfStudy} = req.body;
    students.push({firstName, lastName, fieldOfStudy});
    console.log(students);
    res.send(`
    <html>
    <head><title>Student</title></head>
    <body><p>Hello, ${firstName} ${lastName} on ${fieldOfStudy} studies!</p></body>
    </html>
    `);
});

app.get('/add-student', (req, res) => {
  res.sendFile('views/add-student.html', {root: __dirname});
});

app.get('/users', (req, res) => {
    const studentListItems = students.map(student => 
      `<li><p>${student.firstName} ${student.lastName} - ${student.fieldOfStudy}</p></li>`
    ).join('');

    res.send(`
    <html>
    <head><title>Users List</title></head>
    <body>
        <ul>${studentListItems}</ul>
    </body>
    </html>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});