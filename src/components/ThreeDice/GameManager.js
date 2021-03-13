import React, { Suspense } from "react";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { useAtom } from "jotai";
import { useResetAtom, atomWithReset } from "jotai/utils";
import PropTypes from "prop-types";
import { gameStartState, diceDefaultState, rerollState } from "./gameState";
import { uniqueImageSet } from "../Dice/Dice";
import ThemedDie from "./ThemedDie";
import CollisionMesh from "./CollisionMesh";

/* istanbul ignore next */
const GameManager = () => {
  const diceImageState = atomWithReset([
    {
      uuid: [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()],
      url: uniqueImageSet(),
    },
    {
      uuid: [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()],
      url: uniqueImageSet(),
    },
    {
      uuid: [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()],
      url: uniqueImageSet(),
    },
    {
      uuid: [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()],
      url: uniqueImageSet(),
    },
    {
      uuid: [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()],
      url: uniqueImageSet(),
    },
  ]);

  const [gameStarted, setGameState] = useAtom(gameStartState);
  const [reroll, rerollDice] = useAtom(rerollState);
  const [dicePosition] = useAtom(diceDefaultState);
  const [images] = useAtom(diceImageState);
  const resetImages = useResetAtom(diceImageState);
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
        <ModelLoader url="table/BIG_TABLE.glb" />
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
          <Suspense fallback={null}>
            {dicePosition.map((pos, index) => (
              <ThemedDie
                key={pos.uuid}
                theme="random"
                dicePos={pos.position}
                rerollToggle={reroll}
                dieIndex={index}
                imageSet={images}
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
                resetImages();
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
