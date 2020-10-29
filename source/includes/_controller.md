# Controller

This folder is used to contain the logical workings of the application

## Login.js
> Function is called within [Login.jsx](#login-jsx) by:

```javascript
async function handleSubmit (e) {
  e.preventDefault();
  const isAuth = await loginController(
    email.current.value, 
    password.current.value);
}
```

> Functions contained within Login.js

```javascript
async function loginController (user, pass) {
  // call axios post and await the response
  try {
      const res = await axios.post('/api/users/login', 
      {
          // post information from the login form
          email: user, 
          password: pass
      })
      if (res.status === 204) {
        // user is authenticated
          return true;
      }
      // user is not authenticated
      return false;      
  }
  catch(err) {
      console.error(err);
  }
}
```

This component is responsible for calling the login endpoint which is located at <code>/api/users/login</code>. The function <code>handleSubmit</code> is called by the <code>onSubmit</code> function of form element on the [login page](#login-jsx). This passes the username and password from the form to this function which is then passed in the post call to the login asp.

<aside class="success">
The user is successfully validated and logged in once this function receives a 204 status code response.
</aside>