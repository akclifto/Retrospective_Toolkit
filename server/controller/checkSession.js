function checkSession(req, res) {
    res.json(req.session);
}

module.exports = {checkSession};