const express = require("express");
const fs = require('fs');

const app = express();
const server = require("http").createServer(app);

const production = `https://retrotoolbox.herokuapp.com/`;
const development = "http://localhost:5000/";

const options = {
  cors: true,
  origins: [(process.env.NODE_ENV === "production") ? production : development],
};
const io = require("socket.io")(server, options);

const port = (process.env.NODE_ENV === "production") ? "/tmp/nginx.socket" : 5000;

app.use(express.json());

const rooms = [];

server.listen(port, () =>
  fs.openSync('/tmp/app-initialized', 'w')
);

io.on("connection", (socket) => {
  socket.on("is:roomCreated", (roomId) => {
    socket.emit("room:status", !!rooms[roomId]);
  });

  socket.on("is:gameStarted", (roomId) => {
    socket.emit("game:status", rooms[roomId].gameStarted);
  });

  socket.on("join:Room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("board:create", (roomId) => {
    rooms[roomId] = {
      gameStarted: false,
      rotationValues: [],
      diceImages: {},
      diceQueue: [],
    };
    socket.join(roomId);
  });

  io.of("/").adapter.on("delete-room", (room) => {
    if (room.includes("-")) delete rooms[room];
  });

  socket.on("host:newRoll", (roomId, rotationValues, hostImageArray) => {
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    rooms[roomId].diceQueue.length = 0;
    socket.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });

  socket.on("host:newDieRoll", (roomId, rotationValue, hostImage, index) => {
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
    rooms[roomId].gameStarted = true;
    rooms[roomId].rotationValues = rotationValues;
    rooms[roomId].diceImages = hostImageArray;
    socket.to(roomId).emit("user:getRoll", rotationValues, hostImageArray);
  });
});

module.exports = server;
