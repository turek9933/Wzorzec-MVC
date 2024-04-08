const express = require("express");

const router = express.Router();

let students = [];
let nextId = 1;

const postAddStudent = (req, res) => {

    const {fullName, code, fieldOfStudies} = req.body;

    students.push({id: nextId++, fullName, code, fieldOfStudies});

    //console.log(students);

    res.redirect('/success');
};

const getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', {pageTitle: 'Success'});
};

const getStudentsListPage = (req, res) => {
    res.render('List', {pageTitle: 'List', students});
};

const getAddNewStudentPage = (req, res) => {
    res.render('Home', {pageTitle: 'Add New Student'});
};

module.exports = {
    getAddNewStudentPage,
    postAddStudent,
    getAddingNewStudentSuccessPage,
    getStudentsListPage,
};
