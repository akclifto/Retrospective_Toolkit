# The Server

> Functions and variables contained within server/index.js

```javascript
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session);
app.use(router);
app.listen(port, () => console.log(`server is running on port ${port}`));
```

The server is a Node/Express server  which uses the <code>express-session</code> library to handle session authentication.

In the server's index.js file, the first thing it does is create an express instance. Once this is created, we add the <code>express.json()</code> middleware so that the server can process json data.

Next, we setup the server to serve static files from the build/public path as these will contain the final, production ready files to be served.

Lastly, we setup our session middleware which is used to create a session store on the redis database, set up the server side routing, and then call <code>listen()</code> to start handling requests.

Session Storage | Persistent Storage
--------------- | ------------------
Redis | Postgres