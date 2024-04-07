const http = require("http");
const fs = require("fs");
const index = require('./routes/index.js');

const PORT = 3000;

function requestListener(req, res) {
    if (req.url === "/") {
        index.handleHome(req, res);
    }
    else if (req.url === "/student" && req.method === "POST") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            let formData = {};
            const dataParts = parsedBody.split('&');
            for (let part of dataParts) {
                let [key, value] = part.split('=');
                key = decodeURIComponent(key);
                value = decodeURIComponent(value.replace(/\+/g, ' '));
                formData[key] = value;
            }

            const dataForFile = Object.keys(formData).map(key => `${key}: ${formData[key]}`).join("\n");

            let albumNum = formData.code;

            fs.writeFile(`./${albumNum}.txt`, dataForFile, err => {
                if (err) {
                    console.error('Wystąpił błąd podczas zapisywania pliku:', err);
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    res.end('<h1>Wystąpił błąd serwera przy zapisie danych</h1>');
                    return;
                }
            });

            index.handleStudent(req, res, formData);
        });
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Not Found</h1>");
    }
}

const server = http.createServer(requestListener);

server.listen(
    PORT, 
    () => {
        console.log(`Server is running on ${PORT}`);
    }
);