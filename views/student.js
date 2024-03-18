const fs = require("fs");

function renderPage(response, data) {
    response.write(`
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Student</title>
            </head>
            <body>
                <h1>Student profile</h1>
                <div>
                    <p>Imię: ${data.name}</p>
                    <p>Nazwisko: ${data.lastname}</p>
                    <p>Wiek: ${data.age}</p>
                    <p>Płeć: ${data.gender}</p>
                    <p>Numer albumu: ${data.code}</p>
                    <p>Kierunek: ${data.studyField}</p>
                </div>
            </body>
        </html>
    `);
    response.end();
}
module.exports = {
    renderPage,
};
