import React, { Suspense } from "react";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import { gameStartState, rerollState } from "./gameState";
import DiceManager from "./DiceManager";

/* istanbul ignore next */
const GameManager = (props) => {
  const { setOrbitControl } = props;
  const [gameStarted, setGameState] = useAtom(gameStartState);
  const [reroll, rerollDice] = useAtom(rerollState);
  const rollSound = new Audio("/diceRoll.m4a");
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
        <ModelLoader url="table/BlackRedTable.glb" />
      </Suspense>
      {!gameStarted && (
        <Html position={[-4, 0, 2]} scaleFactor={25}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStart}
            endIcon={<Icon>casino</Icon>}
            onClick={() => {
              setGameState(true);
              rollSound.play();
            }}
          >
            Start Game
          </Button>
        </Html>
      )}
      {gameStarted && (
        <>
          <DiceManager reroll={reroll} setOrbitControl={setOrbitControl} />
          <Html position={[-3, 0, 7]} scaleFactor={25}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>casino</Icon>}
              onClick={() => {
                rerollDice(!reroll);
                rollSound.play();
              }}
            >
              Roll It!
            </Button>
          </Html>
        </>
      )}
    </>
  );
};
GameManager.propTypes = {
  setOrbitControl: PropTypes.func.isRequired,
};
/* istanbul ignore next */
const ProgressBar = () => {
  const { progress } = useProgress();
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
