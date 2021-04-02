import React, { Suspense } from "react";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import { gameStartState, diceDefaultState, rerollState } from "./gameState";
import { randomizeDice } from "../Dice/Dice";
import ThemedDie from "./ThemedDie";
import CollisionMesh from "./CollisionMesh";


/* istanbul ignore next */
const GameManager = () => {
  const [gameStarted, setGameState] = useAtom(gameStartState);
  const [reroll, rerollDice] = useAtom(rerollState);
  const [dicePosition] = useAtom(diceDefaultState);
  var audioElement = new Audio('2021_02_10_18_08_15.m4a');
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
			        audioElement.play();
            }}
          >
            Start Game
          </Button>
        </Html>
      )}
      {gameStarted && (
        <>
          <Suspense fallback={null}>
            {dicePosition.map((pos) => (
              <ThemedDie
                key={pos.uuid}
                theme="random"
                dicePos={pos.position}
                rerollToggle={reroll}
              />
            ))}
            <CollisionMesh />
          </Suspense>
          <Html position={[-3, 0, 7]} scaleFactor={25}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>casino</Icon>}
              onClick={() => {
                randomizeDice();
                rerollDice(!reroll);
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
/* istanbul ignore next */
const ProgressBar = () => {
  const { progress } = useProgress();
  return <Html center>{Math.trunc(progress)} % loaded</Html>;
};
/* istanbul ignore next */
function ModelLoader({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}
ModelLoader.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GameManager;
