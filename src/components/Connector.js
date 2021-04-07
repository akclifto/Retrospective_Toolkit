import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const customConfig = {
  dictionaries: [adjectives, animals, colors],
  length: 3,
  separator: "-",
};

const getUniqueName = () => uniqueNamesGenerator(customConfig);

const connect = (socket, id) => {
  socket.emit("createRoom", id);
};

export { getUniqueName, connect };
