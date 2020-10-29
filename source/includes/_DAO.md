# DAO

This file contains the data access object which is responsible for communicating with the Postgres database.

## User.js

> findUserByEmail is called from [service/auth.js](#auth-js-service)

```javascript
const user = await userDAO.findUserByEmail(email);
```

>Call database to locate the user's email

```javascript
const user = await pool.query(
    `SELECT users.id, email, password, roles.role 
    FROM users 
    LEFT JOIN roles 
    ON roles.id = users.role
    WHERE email = '${email}'`);
```

> If user is found, return the row values

```javascript
return user.rowCount > 0 ? user
```

>Else, return the user was not found

```javascript
return Promise.reject('user not found');
```

The <code>findUserByEmail(email)</code> function is called by the <br /><code>login(email, password)</code> function contained within the [service/auth.js](#auth-js-service) file. This function sends an SQL query to the Postgres database to locate rows that include the email address that was passed into the argument.

<aside class="success">If a record is found, the row is returned with the user's information and their user role</aside>

<aside class="warning">If the user is not found, this will return a rejected promise with a message of "user not found" </aside>