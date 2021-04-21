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

  const url =
    process.env.NODE_ENV === "production"
      ? "https://retrotoolbox.herokuapp.com/"
      : "http://localhost:5000";

  useEffect(() => {
    setSocket(io(url));
  }, [url]);

  useEffect(() => {
    if (socket) {
      socket.emit("is:roomCreated", roomId);
    }
  }, [roomId, socket]);

  useEffect(() => {
    if (roomStatus) {
      socket.emit("is:gameStarted", roomId);
    }
  }, [roomId, roomStatus, socket]);

  useEffect(() => {
    if (roomStatus !== 0) {
      setReceivedRoomStatus(true);
    }
    if (gameStatus !== 0) {
      setReceivedGameStatus(true);
    }
  }, [gameStatus, roomStatus]);

  useEffect(() => {
    if (receivedGameStatus !== 0 && !isConnected && roomStatus) {
      socket.emit("join:Room", roomId);
      setConnectionStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedGameStatus]);

  useEffect(() => {
    if (receivedRoomStatus !== 0 && role === "host" && !roomStatus) {
      socket.emit("board:create", roomId);
      setConnectionStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedRoomStatus]);

  useEffect(() => {
    if (socket) {
      socket.on("room:status", (roomExists) => {
        if (!roomExists) {
          setGameStatus(false);
        }
        setRoomStatus(roomExists);
      });
      socket.on("game:status", (isRunning) => {
        setGameStatus(isRunning);
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
