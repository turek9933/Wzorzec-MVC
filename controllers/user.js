const {User} = require('../models/User');

const getSetUserSession = (request, response) => {
    const users = User.getAll();
    console.log('asghuidasdighudui');
    console.log(users);
    response.render("set-user-session", {title: "Set User Session", users});
};

const setUserSession = (request, response) => {
    request.session.userId = request.body.userId;
    response.redirect("/");
};

module.exports = {
    getSetUserSession,
    setUserSession,
};