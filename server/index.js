/* eslint-disable no-console */
const express = require("express");

const app = express();
const server = require("http").createServer(app);

const options = {
  cors: true,
  origins: ["http://127.0.0.1:5000"],
};
const io = require("socket.io")(server, options);
const router = require("./routes");
const session = require("./middleware/session");

const port = process.env.PORT || 5000;

app.use(express.json());

const rooms = [];

// if behind a proxy, uncomment this
// server.set('trust proxy', 1);

app.use(session);
app.use(router);

server.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}`)
);

io.on("connection", (socket) => {
  // functions here
  console.log("new connection established");

  socket.on("board:create", (roomId) => {
    console.log("board created");
    rooms[roomId] = { rotationValues: [], diceImages: {} };
    console.log("room created");
    console.log(rooms);
    socket.join(roomId);
    console.log("joined room");
    io.sockets.emit("create:complete", "this is from the server!");
  });

  socket.on("board:delete", (roomId) => {
    delete rooms[roomId];
    console.log("room deleted");
    console.log(rooms);
  });

  socket.on("host:newRoll", (roomId, rotationValues, hostImageArray) => {
    console.log("new roll by host");
    console.log(`New roll: ${rotationValues}`);
    console.log(`New roll: ${hostImageArray}`);
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    io.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });

  socket.on("game:start", (roomId, rotationValues, hostImageArray) => {
    console.log("game started by host");
    console.log(rotationValues);
    console.log(hostImageArray);
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    console.log(`Values set: ${rooms}`);
    io.to(roomId).emit("game:started");
    io.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });
});

module.exports = server;
