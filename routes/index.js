const http = require("http");
const home = require("../views/home.js");
const student = require("../views/student.js");

function handleHome(req, res) {
    home.renderPage(res);
}
function handleStudent(req, res, studentData) {
    student.renderPage(res, studentData);
}

module.exports = {
  handleHome,
  handleStudent
};