/* eslint-disable no-console */
const express = require("express");

const app = express();
const server = require("http").createServer(app);

const production = "https://examplePage.com";
const development = "http://localhost:3000/";

const options = {
  cors: true,
  origins: [process.env.NODE_ENV ? production : development],
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

  socket.on("is:roomCreated", (roomId) => {
    socket.emit("room:status", !!rooms[roomId]);
  });

  socket.on("is:gameStarted", (roomId) => {
    socket.emit("game:status", rooms[roomId].gameStarted);
  });

  socket.on("join:Room", (roomId) => {
    socket.join(roomId);
    console.log("joined room");
  });

  socket.on("board:create", (roomId) => {
    console.log("board created");
    rooms[roomId] = {
      gameStarted: false,
      rotationValues: [],
      diceImages: {},
      diceQueue: [],
    };
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
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    rooms[roomId].diceQueue.length = 0;
    socket.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });

  socket.on("host:newDieRoll", (roomId, rotationValue, hostImage, index) => {
    console.log("new single die roll by host");
    if (rooms[roomId].diceQueue.length === 0)
      rooms[roomId].diceQueue.push({
        rotation: rooms[roomId].rotationValues,
        image: rooms[roomId].diceImages,
        die: null,
      });
    rooms[roomId].diceQueue.push({
      rotation: rotationValue,
      image: hostImage,
      die: index,
    });
    socket.to(roomId).emit("user:getDieRoll", rotationValue, hostImage, index);
  });

  socket.on("get:update", (roomId) => {
    console.log("user requesting update");
    if (rooms[roomId].diceQueue.length === 0) {
      socket.emit(
        "user:init",
        rooms[roomId].rotationValues,
        rooms[roomId].diceImages
      );
    } else {
      const queue = rooms[roomId].diceQueue.slice();
      socket.emit("user:initQueue", queue.shift());
      for (let i = 0, time = 3000; i < queue.length; i += 1, time += 2000) {
        setTimeout(() => {
          socket.emit("user:initQueue", queue.shift());
        }, time);
      }
    }
  });

  socket.on("game:start", (roomId, rotationValues, hostImageArray) => {
    console.log("game started by host");
    rooms[roomId].gameStarted = true;
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    socket.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });
});

module.exports = server;
