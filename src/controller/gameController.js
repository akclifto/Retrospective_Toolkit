import React from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const GameController = () => {
  let roomId;

  if (sessionStorage.getItem("role") === null) {
    roomId = uuidv4();
    sessionStorage.setItem("role", "host");
    sessionStorage.setItem("roomId", roomId);
    return <Redirect to={`/retro/${roomId}`} />;
  }
  roomId = sessionStorage.getItem("roomId");
  return <Redirect to={`/retro/${roomId}`} />;
};

export default GameController;
