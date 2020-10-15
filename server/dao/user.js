// fake db for roughing out some structure

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

async function findUserByEmail(email) {
    const user = users[email];
    return user ? user : Promise.reject('user not found');
}

module.exports = {findUserByEmail};