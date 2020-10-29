# Routes (API)

This folder contains the api used by the application.

## Index.js (Server API)

> Unprotected routes

```javascript
router.post('/api/users/login', authController.login);
```

> Protected routes are secured by this middleware call

```javascript
// all routes after this are protected
// and can only be accessed by logged in users
router.use(authenticate);
```

> Protected routes

```javascript
router.get('/api/checksession', function(req, res) {
    res.sendStatus(204);
});
```

This file contains all the unprotected and protected routes our application servers on the backend. These serve to establish the API of the application.

## API: Login (POST)

> API: login (POST)

```javascript
router.post('/api/users/login', authController.login);
```

> The call from the client [login.js](#login-js) file

```javascript
const res = await axios.post('/api/users/login', 
        {
            email: user, 
            password: pass
        })
```

<code>/api/users/login</code>

This api call is passed a json object which contains a user email and a user password. When called, this json object is passed to the [authController.login](#auth-js-controller) as the req parameter in the function.

<aside class="success">If verified, a json object is returned which contains the user.ID and user.role which is stored as a cookie on the users browser and we send status code 204</aside>

<aside class="warning">If not authenticated, the service call will return a rejected promise and a status code of 401</aside>

## API: CheckSession (GET)

> API: checksession (GET)

```javascript
router.get('/api/checksession', function(req, res) {
    res.sendStatus(204);
});
```

> ifAuth function that calls this API

```javascript
axios.get('/api/checksession')
    .then(res => {
        if (res.status === 204 || res.status === 200) {
        this.setState({ loading: false });
        } else {
        const error = new Error(res.error);
        throw error;
        }
    })
    .catch(err => {
        this.setState({ loading: false, redirect: true });
    });
```

> Authenticate middleware function that protects this route

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

<code>/api/checksession</code>

This is an API call which checks to see if a user is logged in. This is called by the [ifAuth.js](#ifauth-js) higher order component when a user is trying to access a protected react route.

The route on its own does not perform any authentication. Rather, if a user is able make a get request to the protected route, it will return a 204 status code. Since this is a protected route, the [authenticate middleware](#authenticate-js) will verify if the user is logged in or not. If they are not, it will prevent the call to this route. Otherwise, the user is able to hit the route and get the returned 204 status code which will allow them to proceed to the protected content.