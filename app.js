const http = require("http");
const index = require('./routes/index.js');

const PORT = 3000;

function requestListener(req, res) {
    if (req.url === "/" && req.method === "GET") {
        index.handleHome(req, res);
    }
    else if (req.url === "/student" && (req.method === "GET" || req.method === "POST")){
        index.handleStudent(req, res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
}

const server = http.createServer(requestListener);

server.listen(PORT, console.log(`Server is running on ${PORT}`));