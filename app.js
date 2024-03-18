const http = require("http");
const home = require("./views/home.js");
const student = require("./views/student.js");

const PORT = 3000;

function requestListener(request, response) {
    const {url, method} = request;
    console.log(`Server is running on ${PORT}`);
    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>My second Node App</title></head>");
        response.write(`
        <body>
            <form action="/home" method="">
                <button>home</button>
            </form>
            <form action="/student" method="">
                <button>Student</button>
            </form>
        </body>
        `);
        response.write("</html>");
        return response.end();
    }
    else if (url === "/student") {
        student.renderPage(response);
    }
    //if (url === "/home") {
    else {
        home.renderPage(response);
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);
