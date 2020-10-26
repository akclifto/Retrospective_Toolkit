# Starting the Dev Build

> Commands to be entered in order

```curl
yarn
yarn start-server
yarn start-client
```

> Script contents in root package.json

```json
{
    "start-server": "cd server && node index.js",
    "start-client": "react-scripts start"
}
```

In order to start the application on a localhost, the first command to be called should be <code>yarn</code>. This will build the dependencies for the application. This should be called in both the root and in the server directory.

Once this is accomplished, the next command to execute should be <code>yarn start-server</code>. This should be called in the root application folder. This creates an instance of the express server, connects to the Heroku databases, and then starts listening on port 5000.

Once the server is running, the final command to execute is <code>yarn start-client</code>. This starts up the react development server and displays our front-end.  

# Heroku Build 

> Script contents in root package.json

```json
{
  "heroku-server": "cd server && yarn && node index.js",
  "heroku-postbuild": "yarn & yarn run build"
}
```

> This creates the proxy to avoid cors issues

```json
{
  "proxy": "http://localhost:5000"
}
```

> Procfile contents

```curl
web: yarn heroku-server
```

The Heroku build order is the opposite of the dev build order. The first script to be executed on Heroku is the <code>heroku-postbuild</code> script. This script calls yarn to build the dependencies and creates the react build for the front end. 

Once the client build is complete, the [Procfile](##ProcFile) is executed. This tells Heroku to call the <code>heroku-server</code> script. This calls yarn to build the server dependencies and then start the server.

This unusual build order is necessary as Heroku was not meant to have a project with more than one package.json file. that is to say, a server and client on the same dyno. The server and client are able to communicate due to a proxy which is setup in the package.json file located at the root of the application.