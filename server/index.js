const express = require("express");

const port = process.env.PORT || 5000;
const router = require("./routes");
const session = require("./middleware/session");
const io = require('socket.io')(server);

const app = express();
app.use(express.json());

// if behind a proxy, uncomment this
// server.set('trust proxy', 1);

app.use(session);
app.use(router);

io.on('connection', (socket) => {
  console.log('a user connected');
});

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}`)
);

module.exports = server;
