function renderPage(res, studentData) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student</title>
    </head>
    <body>
        <h1>Student Profile</h1>
        <p>Album number: ${studentData.code}</p>
        <p>Name: ${studentData.name}</p>
        <p>Last name: ${studentData.lastname}</p>
        <p>Gender: ${studentData.gender}</p>
        <p>Age: ${studentData.age}</p>
        <p>Study field: ${studentData.studyField}</p>
    </body>
    </html>
    `);
}

module.exports = {
    renderPage,
};