
const getNotFoundPage = (req, res) => {
    res.status(404).render('NotFound');
};

module.exports = {
    getNotFoundPage,
}