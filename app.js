const student = require("./student.js");
const http = require("http");

const PORT = 3000

const server = http.createServer();

server.listen(
  PORT,
  console.log(`Server is running on ${PORT}.`),
  console.log("My name is " + student.getStudentFullName() + ". My student ID is " + student.getStudentId() + "."),
);