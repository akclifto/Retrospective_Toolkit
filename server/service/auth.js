const userDAO = require('../dao/user');
const bcrypt = require('bcrypt');

async function login(email, password) {
    // lookup user by email
    try {
        const user = await userDAO.findUserByEmail(email);

        const match = await bcrypt.compare(password, user.rows[0].password);

        if (match) {

            return {id: user.rows[0].id, roles: user.rows[0].role};
        } else {
            return Promise.reject('wrong username or password');
        }
    } catch(err) {
        return Promise.reject('user not found');
    }
}

module.exports = {login};