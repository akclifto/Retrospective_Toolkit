import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  // eslint-ignore-next-line
} from "unique-names-generator";
import * as io from "socket.io-client";

const customConfig = {
  dictionaries: [adjectives, animals, colors],
  length: 3,
  separator: "-",
};

const getUniqueName = () => uniqueNamesGenerator(customConfig);

const connect = (id) => {
  const socket = io.connect(
    window.location.origin.replace(window.location.port, "5000")
  );
  socket.on("talk", (text) => {
    console.log(text);
  });
  console.log("on fired");
  socket.emit("board:create", id);
  console.log("emit fired");
  socket.on("create:complete", (msg) => {
    console.log(msg);
  });
  return socket;
};

export { getUniqueName, connect };
