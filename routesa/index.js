const http = require("http");
const home = require("./views/home.js");
const student = require("./views/student.js");

function handleHome(response) {
    home.renderPage(response);
}
function handleStudent(response) {
    student.renderPage(response);
}
