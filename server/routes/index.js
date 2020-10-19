const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
//const adminController = require('../controller/admin');

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// create unprotected login endpoint
router.post('/api/users/login', authController.login);

// all routes after this are protected
// and can only be accessed by logged in users
router.use(authenticate);

router.get('/api/checksession', function(req, res) {
    res.sendStatus(204);
});

module.exports = router;