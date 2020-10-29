# Controller (Server)

This folder is used to contain the logical workings of the back-end.

## Auth.js (Controller)

> Validate form data

```javascript
if (!email || !password) {
    return res.status(400).json('Bad request params - you need to provide an email and password');
}
```

> Call login function in[service/auth.js](#auth-js-service)

```javascript
    const user = await authService.login(email, password);
```

>If user is found, return cookie with user information

```javascript
    req.session.user = user;
    return res.sendStatus(204);
```

>Else, return error and 401

```javascript
return res.status(401).json(err);
```

This file handles communications between the login form  in the react client and the user authentication service.

The <code>login(req, res)</code> function is called from the login form contained with the [Login.jsx](#login-jsx) page. When the form is submitted, it passes the users email and password information as an argument to this function.

<aside class="warning">If either the email or password values are null, this will return a status code of 400</aside>

Once it is verified that the user has submitted their information, the <code>login(email, password)</code> function contained within the [service/auth.js](#auth-js-service) file is called. This will make an api call to the Postgres server to verify the user exists.

<aside class="success">If verified, a json object is returned which contains the user.ID and user.role which is stored as a cookie on the users browser and we send status code 204</aside>

<aside class="warning">If not authenticated, the service call will return a rejected promise and a status code of 401</aside>