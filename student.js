let FULLNAME = 'Tomasz Turek';
let STUDENT_ID = 44674;

function getStudentFullName(id) {
    if (id === 0) {
        return FULLNAME;
    }
    else if (id === 1) {
        return "Kacper Nowak";
    }
    else if (id === 2) {
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
    else if (id === 1) {
        return 111222;
    }
    else if (id === 2) {
        return 222333;
    }
    else {
        return 333444;
    }
}
function printStudent(id) {
    console.log("My name is " + getStudentFullName(id) + ". My student ID is " + getStudentId(id) + ".");
}

module.exports = {
    getStudentFullName,
    getStudentId,
    printStudent,
};
    
