/* eslint-disable no-console */
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import * as io from "socket.io-client";

const NetworkManager = () => {
  const [socket, setSocket] = useState();
  let roomId;
  console.log("rendering");

  if (sessionStorage.getItem("role") === null) {
    roomId = uuidv4();
    console.log("generate id");
    // if the role is null then we will create a new room and assign the room Id to session storage
    // sessionStorage.setItem("role", "host");
    // console.log(window.location.port);
    // console.log(window.location.origin);
    // console.log(window.location.pathname.split("/").pop());
  } else {
    // get roomId and redirect back to room page
    sessionStorage.getItem("roomId");
  }

  useEffect(() => {
    setSocket(
      io.connect(window.location.origin.replace(window.location.port, "5000"))
    );
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (socket) {
      console.log("on fired");
      socket.emit("board:create", roomId);
      console.log("emit fired");
      socket.on("create:complete", (msg) => {
        console.log(msg);
        window.location.assign(`/board/${roomId}`);
      });
    }
  }, [roomId, socket]);

  return null;
};

export default NetworkManager;
