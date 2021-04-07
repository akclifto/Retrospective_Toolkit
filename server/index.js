const express = require("express");

const port = process.env.PORT || 5000;
const socketIO = require("socket.io");
const router = require("./routes");
const session = require("./middleware/session");

const app = express();
app.use(express.json());

// if behind a proxy, uncomment this
// server.set('trust proxy', 1);

app.use(session);
app.use(router);

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}`)
);

const io = socketIO(server);

const rooms = [];

io.on("connection", () => {
  // eslint-disable-next-line no-console
  console.log("New client connected");
  io.emit("talk");
});

io.on("createRoom", (roomName) => {
  rooms.push(roomName);
  io.emit("talk", `Received new room with name of ${roomName}!`);
});

module.exports = server;
