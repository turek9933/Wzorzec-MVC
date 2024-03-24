const http = require("http");
const home = require("./views/home.js");
const student = require("./views/student.js");

const PORT = 3000;

function requestListener(req, res) {
    const {url} = req;
    if (url === "/") {
        home.renderPage(res);
    }
    else if (url === "/student") {
        student.renderPage(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
}

const server = http.createServer(requestListener);

server.listen(PORT, console.log(`Server is running on ${PORT}`));