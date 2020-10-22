const authService = require('../service/auth');

async function login (req, res) {

    const {email, password} = req.body;

    //perform payload validation
    //in prod use a validation library
    // instead of this basic validation
    if (!email || !password) {
        return res.status(400).json('Bad request params - you need to provide an email and password');
    }
    
    try {
        const user = await authService.login(email, password);
        req.session.user = user;
        return res.sendStatus(204);
    } catch(err) {
        console.error(err); // TODO: Only for debugging. Remove this.
        return res.status(401).json(err);
    }
}

module.exports = {
    login
};