const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const router = require('./routes');
const session = require('./middleware/session');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const sio = socketIO(server);

app.use(express.json());

// if behind a proxy, uncomment this
//server.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session);
app.use(router);


sio.on("connection", (socket) => {
  console.log('CLient connected!');
  socket.on("disconnect", () => {
    console.log("Client Disconnected!")
  });
})

server.listen(port, () => console.log(`server is running on port ${port}`));
