function login (req, res) {

    const {email, password} = req.body;

    //perform payload validation
    //in prod use a validation library
    // instead of this basic validation
    if (!email || !password) {
        return res.status(400).json('Bad request params - you need to provide an email and password');
    }
    
    //check if login information is correct
    // ...
    
    // for testing we'll assume the login is correct for now
    req.session.clientId = 'someuser';
    req.session.someNum = 42;
    
    res.json('you are now logged in');
}

module.exports = {
    login
};