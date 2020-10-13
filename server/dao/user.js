const bcrypt = require('bcrypt');

const users = {
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
}

// this call would be async and return a promise if we were using a real db
async function findUserByEmail(email) {
    return users[email];
}

module.exports = {findUserByEmail};