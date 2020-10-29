# Service

This folder contains all the services used by the backend

## Auth.js (Service)

> This is called by the [auth.js controller](#auth-js-controller)

```javascript
const user = await authService.login(email, password);
req.session.user = user;
return res.sendStatus(204);
```

> First we call the [DAO](#dao) to query Postgres to see if the user exists

```javascript
const user = await userDAO.findUserByEmail(email);
```

> If user is found, we compare the password to the encrypted password hash returned by Postgres

```javascript
const match = await bcrypt.compare(
    password, 
    user.rows[0].password);
```

> If there is a match, return the row from the DB

```javascript
return {
    id: user.rows[0].id, 
    roles: user.rows[0].role};
```
> Else, reject the promise

```javascript
return Promise.reject('wrong username or password');
```

This is the service responsible for handling the authentication process. It is the functionality which brings all the separate authentication mechanisms together in order to process a login.

<aside class="success">If verified, a json object is returned which contains the user.ID and user.role which is eventually stored as a cookie on the users browser</aside>

<aside class="warning">If not authenticated, or the user is not found, the service will return a rejected promise and a status code of 401</aside>