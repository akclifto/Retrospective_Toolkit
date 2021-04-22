import React, { Suspense, useState, useEffect } from "react";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import { rerollState } from "./gameState";
import HostDiceManager from "./HostDiceManager";
import UserDiceManager from "./UserDiceManager";

/* istanbul ignore next */
const getRole = () =>
  sessionStorage.getItem("role") ? sessionStorage.getItem("role") : "user";

const rollSound = () => {
  new Audio("/diceRoll.m4a").play();
};

/* istanbul ignore next */
const GameManager = (props) => {
  const { setOrbitControl, socket, roomId, gameStatus } = props;
  const [gameStarted, setGameState] = useState(gameStatus);
  const [reroll, rerollDice] = useAtom(rerollState);
  const role = getRole();
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      width: "120px",
    },
    buttonStart: {
      margin: theme.spacing(1),
      width: "160px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    if (gameStarted) {
      rollSound();
    }
  }, [reroll, gameStarted]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1.0}
        position={[0, 20, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={<ProgressBar />}>
        <ModelLoader url="../../table/BlackRedTable.glb" />
      </Suspense>
      {!gameStarted && role === "host" && (
        <Html position={[-4, 0, 2]} scaleFactor={25}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStart}
            endIcon={<Icon>casino</Icon>}
            onClick={() => {
              setGameState(true);
            }}
          >
            Start Game
          </Button>
        </Html>
      )}
      {gameStarted && role === "host" && (
        <>
          <HostDiceManager
            reroll={reroll}
            setOrbitControl={setOrbitControl}
            socket={socket}
            roomId={roomId}
            gameStatus={gameStatus}
            rollSound={rollSound}
          />
          <Html position={[-3, 0, 7]} scaleFactor={25}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>casino</Icon>}
              onClick={() => {
                rerollDice(!reroll);
              }}
            >
              Roll It!
            </Button>
          </Html>
        </>
      )}
      {role === "user" && (
        <>
          <UserDiceManager
            setOrbitControl={setOrbitControl}
            socket={socket}
            gameStatus={gameStatus}
            roomId={roomId}
            rollSound={rollSound}
          />
        </>
      )}
    </>
  );
};
GameManager.propTypes = {
  setOrbitControl: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
  gameStatus: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};
/* istanbul ignore next */
const ProgressBar = () => {
  const { progress } = useProgress();
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <Html center>{Math.trunc(progress)} % loaded</Html>;
};
/* istanbul ignore next */
const ModelLoader = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
};
ModelLoader.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GameManager;
