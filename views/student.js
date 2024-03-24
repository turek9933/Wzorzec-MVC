function renderPage(res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
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
}
module.exports = {
    renderPage,
};