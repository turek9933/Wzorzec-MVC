function renderPage(res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
  <html lang="pl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
  </head>
  <body>
    <div>Home</div>
    <form action="/student" method="POST">
      <div>
        <label for="name">Imię:</label>
        <input type="text" id="name" name="name" required><br>
      </div>
      <div>
        <label for="lastname">Nazwisko:</label>
        <input type="text" id="lastname" name="lastname" required><br>
      </div>
      <div>
        <label for="age">Wiek:</label>
        <input type="number" id="age" name="age" required><br>
      </div>
      <div>
        <label for="gender">Płeć:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br>
      </div>
      <div>
        <label for="code">Numer albumu:</label>
        <input type="number" id="code" name="code" required><br>
      </div>
      <div>
        <label for="studyField">Kierunek:</label>
        <input type="text" id="studyField" name="studyField" required><br>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  </body>
  </html>
  `);
}
module.exports = {
  renderPage,
};