const fs = require("fs");

function renderPage(response) {
    response.write(`
    <html lang=”pl”>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>home</title>
        </head>
        <body>
            <div>Jestesmy w pliku home</div>
            <form action="/submit" method="POST">
            <div>
                <label for="name">Imię:</label><br>
                <input type="text" id="name" name="name"><br><br>
            </div>

            <div>
                <label for="lastname">Nazwisko:</label><br>
                <input type="text" id="lastname" name="lastname"><br><br>
            </div>

            <div>
                <label for="age">Wiek:</label><br>
                <input type="number" id="age" name="age"><br><br>
            </div>

            <div>
                <label for="gender">Płeć:</label><br>
                <select id="gender" name="gender">
                    <option value="male">Mężczyzna</option>
                    <option value="female">Kobieta</option>
                    <option value="other">Inna</option>
                </select><br><br>
            </div>

            <div>
                <label for="code">Numer albumu:</label><br>
                <input type="number" id="code" name="code"><br><br>
            </div>

            <div>
                <label for="studyField">Kierunek:</label><br>
                <input type="text" id="studyField" name="studyField"><br><br>
            </div>

            <button type="submit">Wyślij</button>
        </form>

        </body>
    </html>
    `);
    return response.end()
}

function save(data) {
    const { name, lastname, age, gender, code, studyField } = data;
    const dataToSave = `Imię: ${name}\nNazwisko: ${lastname}\nWiek: ${age}\nPłeć: ${gender}\nNumer albumu: ${code}\nKierunek: ${studyField}`;
    fs.writeFileSync(`${code}.txt`, dataToSave);
}

module.exports = {
    renderPage,
    save,
};
