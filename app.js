const http = require("http");
const index = require('./routes/index.js');

const PORT = 3000;

function requestListener(req, res) {
    if (req.url === "/") {
        index.handleHome(req, res);
    }
    else if (req.url === "/student") {
        if (req.method === "POST") {
            res.statusCode = 302;
            res.setHeader("Location", "/student");
            res.end();
        }
        else {
            index.handleStudent(req, res);
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Not Found</h1>");
    }
    //console.log(req.method);
}

const server = http.createServer(requestListener);

server.listen(
    PORT, 
    () => {
        console.log(`Server is running on ${PORT}`);
    }
);