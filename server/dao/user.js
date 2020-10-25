const pool = require('../db/postgres');

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