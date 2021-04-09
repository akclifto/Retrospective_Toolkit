import { v4 as uuidv4 } from "uuid";

const GameController = () => {
  let roomId;

  if (sessionStorage.getItem("role") === null) {
    roomId = uuidv4();
    sessionStorage.setItem("role", "host");
    sessionStorage.setItem("roomId", roomId);
    window.location.assign(`/board/${roomId}`);
  } else {
    roomId = sessionStorage.getItem("roomId");
    window.location.assign(`/retro/${roomId}`);
  }

  return null;
};

export default GameController;
