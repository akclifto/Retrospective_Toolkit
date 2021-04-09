/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as io from "socket.io-client";
import DiceLanding from "../../containers/DiceLanding";

const NetworkManager = () => {
  const [socket, setSocket] = useState();
  const { roomId } = useParams();
  console.log("rendering");

  // check with server to see if roomId exists
  // if () === null) {};
  // redirect to page not found

  useEffect(() => {
    setSocket(io(window.location.origin.replace(window.location.port, "5000")));
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (socket) {
      console.log("on fired");
      socket.emit("board:create", roomId);
      console.log("emit fired");
      socket.on("create:complete", (msg) => {
        console.log(msg);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return <>{socket && <DiceLanding socket={socket} roomId={roomId} />}</>;
};

export default NetworkManager;
