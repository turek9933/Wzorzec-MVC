function renderPage(response) {
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <html lang=”pl”>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Student</title>
        </head>
        <body>
            <div>Student</div>
        </body>
    </html>
    `);
    return response.end()
}
module.exports = {
    renderPage,
};
