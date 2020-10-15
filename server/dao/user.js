const bcrypt = require('bcrypt');
const pool = require('../db/postgres');

// fake db for testing
/*const users = {
    'user1@asu.edu' : {
        pwhash: bcrypt.hashSync('user1pw', 10),
        roles: ['ADMIN'],
        id: '701705f4-5ae9-44ba-aa8d-9404893056ac'

    },
    'user2@asu.edu' : {
        pwhash: bcrypt.hashSync('user2pw', 10),
        roles: ['USER'],
        id: '9d8cf56b-1780-4972-81ff-1007b6a96ca5'
    }
}*/

async function findUserByEmail(email) {
    try { 
    const user = await pool.query(
        `SELECT users.id, email, password, roles.role 
        FROM users 
        LEFT JOIN roles 
        ON roles.id = users.role
        WHERE email = '${email}'`);

    // const user = users[email];
    return user.rowCount > 0 ? user : Promise.reject('user not found');
    } catch(err)  {
        console.error(err) // TODO: remove from production code'
    }
}

module.exports = {
    findUserByEmail
};