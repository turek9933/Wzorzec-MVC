let FULLNAME = 'Tomasz Turek';
let STUDENT_ID = 44674;

function getStudentFullName() {}
function getStudentId() {}
function printStudent() {}

function getStudentFullName() {
    return FULLNAME;
}
function getStudentId() {
    return STUDENT_ID;
}
function printStudent() {
    console.log("My name is " + getStudentFullName() + ". My student ID is " + getStudentId() + ".");
}

printStudent();