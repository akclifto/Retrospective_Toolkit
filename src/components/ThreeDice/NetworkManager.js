/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as io from "socket.io-client";
import DiceLanding from "../../containers/DiceLanding";

/* istanbul ignore next */
const NetworkManager = () => {
  const [socket, setSocket] = useState();
  const { roomId } = useParams();
  const [role] = useState(sessionStorage.getItem("role"));
  const [gameStatus, setGameStatus] = useState(0);
  const [receivedGameStatus, setReceivedGameStatus] = useState(0);
  const [roomStatus, setRoomStatus] = useState(0);
  const [receivedRoomStatus, setReceivedRoomStatus] = useState(0);
  const [isConnected, setConnectionStatus] = useState();

  useEffect(() => {
    setSocket(io(window.location.origin.replace(window.location.port, "5000")));
  }, []);

  useEffect(() => {
    if (socket) {
      console.log("inside room check useEffect");
      socket.emit("is:roomCreated", roomId);
    }
  }, [roomId, socket]);

  useEffect(() => {
    if (roomStatus) {
      console.log("inside game check useEffect");
      socket.emit("is:gameStarted", roomId);
    }
  }, [roomId, roomStatus, socket]);

  useEffect(() => {
    if (roomStatus !== 0) {
      console.log("inside received room status useEffect");
      setReceivedRoomStatus(true);
    }
    if (gameStatus !== 0) {
      console.log("inside received game status useEffect");
      setReceivedGameStatus(true);
    }
  }, [gameStatus, roomStatus]);

  useEffect(() => {
    if (receivedGameStatus !== 0 && !isConnected && roomStatus) {
      console.log("entered join room if");
      socket.emit("join:Room", roomId);
      setConnectionStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedGameStatus]);

  useEffect(() => {
    if (receivedRoomStatus !== 0 && role === "host" && !roomStatus) {
      console.log("inside received room status");
      socket.emit("board:create", roomId);
      setConnectionStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedRoomStatus]);

  useEffect(() => {
    if (socket) {
      socket.on("room:status", (roomExists) => {
        console.log(`Room status: ${roomExists}`);
        if (!roomExists) {
          console.log("inside room does not exist");
          setGameStatus(false);
        }
        setRoomStatus(roomExists);
      });
      socket.on("game:status", (isRunning) => {
        console.log(`Is Running: ${isRunning}`);
        setGameStatus(isRunning);
      });
      socket.on("create:complete", (msg) => {
        console.log(msg);
      });
    }
  }, [socket]);

  return (
    <>
      {socket &&
        receivedGameStatus !== 0 &&
        receivedRoomStatus !== 0 &&
        gameStatus !== 0 && (
          <DiceLanding
            socket={socket}
            roomId={roomId}
            gameStatus={gameStatus}
          />
        )}
    </>
  );
};

export default NetworkManager;
