# Middleware

This folder contains all the middleware that is used by the server.

## Authenticate.js

> Functions contained within authenticate.js

```javascript
function authenticate(req, res, next) {
    if (!req.session || !req.session.user) {
        const err = new Error('You are not logged in');
        err.statusCode = 401;
        next(err);
    }
    next();
}
```

This middleware insures that only authorized users can access protected routes. It accomplishes this by checking to make sure that the user has a valid session and that the user has a valid cookie which contains their user information

<aside class="success">If the user is authorized, the function allows the user to proceed</aside>

<aside class="warning">If not authenticated, the service call will return an error of "You are not logged in" and a status code of 401</aside>

## Session.js

>Configuration of the redis session store

```javascript
module.exports = session({
    store: new redisStore({client: redisClient}),
    // TODO: This is not a secure secret.. fix this if going to production
    secret: 'secretsauce',
    saveUninitialized: false,
    resave: false,
    name: 'sessionId',
    cookie: {
        // TODO: In production, this must be true in order to send cookies over HTTPS
        secure: false,
        // Insure we don't have sneaky javascript trying to read our cookies 
        httpOnly: true,
        // Session timeout of 30 minutes 
        maxAge: 1000 * 60 * 30
    }
});
```

This middleware sets up the session store on the Redis database and manages sessions