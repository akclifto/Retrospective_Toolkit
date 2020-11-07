# The Client

> This jsx sets up the routing:

```jsx
ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
```

> Routes are inside the [Routes component](#routes-js) within the routes folder

The client was created with <a href='https://create-react-app.dev/docs/getting-started/'>create-react-app</a> using the <a href='https://yarnpkg.com/'>yarn package manager</a>.

The main file of the client is the index.js file which returns the jsx code to the right. The only purpose of this file is to implement the routing for our react application and to attach our application to the root element of the index.html file located in the public folder.