let FULLNAME = 'Tomasz Turek';
let STUDENT_ID = 44674;
let message = "My name is ${asdsa}. My student ID is ${STUDENT_ID}";

function getStudentFullName(id) {
    if (id === 0) {
        return FULLNAME;
    }
    if (id === 1) {
        return "Kacper Nowak";
    }
    if (id === 2) {
        return "Maja Kowalska";
    }
    else {
        return "Michal Wisniewski";
    }
}
function getStudentId(id) {
    if (id === 0) {
        return STUDENT_ID;
    }
    if (id === 1) {
        return 111222;
    }
    if (id === 2) {
        return 222333;
    }
    else {
        return 333444;
    }
}

function printStudent() {
    console.log("My name is " + getStudentFullName() + ". My student ID is " + getStudentId() + ".");
}

module.exports = {
    getStudentFullName,
    getStudentId,
    printStudent,
};
    