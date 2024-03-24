const student = require("./student.js");
const http = require("http");

const PORT = 3000;

function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>About student</title></head>");
    response.write("<body><p>" + student.printStudent(0) + "</p></body>");
    response.write("</html>");
    response.end();
}

const server = http.createServer(requestListener);

server.listen(PORT);