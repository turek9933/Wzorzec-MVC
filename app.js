const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

let students = [];

app.get('/home', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <p>HOME</p>
  </body>
  </html>`
  );
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
    res.send(`
    <html>
    <head><title>Add Student</title></head>
    <body>
    <form action="/student" method="post">
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="fieldOfStudy" />
        <button type="submit">Wyślij</button>
    </form>
    </body>
    </html>
    `);
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