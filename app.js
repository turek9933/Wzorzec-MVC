const student = require(".\\student.js");
const http = require("http");

const PORT = 3000

function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>About student</title></head>");
    response.write("<body><h2>" + "My name is " + student.getStudentFullName() + ". My student ID is " + student.getStudentId + "." + "</h2></body>");
    response.write("</html>");
    response.end();
    console.log("RequestListener", {
        //request,
        response,
        //url,
        //method,
        //headers
    });
}

const server = http.createServer(requestListener);

server.listen(PORT);