let students = [];
let nextId = 1;

const postAddStudent = (req, res) => {

    const {fullName, code, fieldOfStudies} = req.body;

    students.push({id: nextId++, fullName, code, fieldOfStudies});

    //console.log(students);

    res.redirect('/success');
};

const getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success');
};

const getStudentsListPage = (req, res) => {
    res.render('List');
};

const getAddNewStudentPage = (req, res) => {
    res.render('Home', {pageTitle: "Add New Student"});
};

module.exports = {
    getAddNewStudentPage,
    postAddStudent,
    getAddingNewStudentSuccessPage,
    getStudentsListPage,
};
