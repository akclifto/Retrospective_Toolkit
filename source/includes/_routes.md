# Routes

This folder contains the react routes used in the application

## Routes.js

> JSX returned by Routes.js

```jsx
<Switch>
  <Route exact path='/' component = {LandingPage} />
  <Route path='/admin' component = {ifAuth(AuthLandingPage)} />
  <Route path='/login' component = {Login} />
  <Route path='/signup' component = {Signup} />
</Switch>
```
> ifAuth can be examined [here](#ifauth-js)

### Unprotected Routes:
* /
* /login
* /signup

### Protected Routes:
* /admin