/* eslint-disable no-console */
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import { BoxBufferGeometry } from "three";
import { useThree, useFrame } from "react-three-fiber";
import { Html } from "@react-three/drei";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UserThemedDie from "./UserThemedDie";
import CollisionMesh from "./CollisionMesh";
import { diceDefaultState } from "./gameState";

/* istanbul ignore next */
const DiceManager = (props) => {
  const { reroll, setOrbitControl, socket } = props;
  const geom = useMemo(() => new BoxBufferGeometry(), []);

  const [userGameReady, setUserReady] = useState(false);

  const [dicePosition] = useAtom(diceDefaultState);

  const [dieImagesOne, setImagesOne] = useState();
  const [dieImagesTwo, setImagesTwo] = useState();
  const [dieImagesThree, setImagesThree] = useState();
  const [dieImagesFour, setImagesFour] = useState();
  const [dieImagesFive, setImagesFive] = useState();

  const [rerollOne, toggleRerollOne] = useState(false);
  const [rerollTwo, toggleRerollTwo] = useState(false);
  const [rerollThree, toggleRerollThree] = useState(false);
  const [rerollFour, toggleRerollFour] = useState(false);
  const [rerollFive, toggleRerollFive] = useState(false);

  const [rotationOne, setRotationOne] = useState();
  const [rotationTwo, setRotationTwo] = useState();
  const [rotationThree, setRotationThree] = useState();
  const [rotationFour, setRotationFour] = useState();
  const [rotationFive, setRotationFive] = useState();

  const imageArray = [
    { images: dieImagesOne, setImages: setImagesOne },
    { images: dieImagesTwo, setImages: setImagesTwo },
    { images: dieImagesThree, setImages: setImagesThree },
    { images: dieImagesFour, setImages: setImagesFour },
    { images: dieImagesFive, setImages: setImagesFive },
  ];

  const rerollArray = [
    { rerollDie: rerollOne, reroll: toggleRerollOne },
    { rerollDie: rerollTwo, reroll: toggleRerollTwo },
    { rerollDie: rerollThree, reroll: toggleRerollThree },
    { rerollDie: rerollFour, reroll: toggleRerollFour },
    { rerollDie: rerollFive, reroll: toggleRerollFive },
  ];

  const rotationArray = [
    { rotation: rotationOne, setRotation: setRotationOne },
    { rotation: rotationTwo, setRotation: setRotationTwo },
    { rotation: rotationThree, setRotation: setRotationThree },
    { rotation: rotationFour, setRotation: setRotationFour },
    { rotation: rotationFive, setRotation: setRotationFive },
  ];

  const useStyles = makeStyles((theme) => ({
    buttonStart: {
      margin: theme.spacing(1),
      width: "160px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    socket.on("game:started", () => {
      setUserReady(true);
    });
  }, [setUserReady, socket]);

  useEffect(() => {
    console.log("inside DiveManager useEffect");
    socket.on("user:getRoll", (rotationValues, imagesArray) => {
      console.log("enter user:getRoll");
      // eslint-disable-next-line array-callback-return
      imagesArray.map((image, index) => {
        imageArray[index].setImages(image);
        rotationArray[index].setRotation(rotationValues[index]);
      });
      console.log("success user:getRoll");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { viewport } = useThree();
  const mousePos = [];

  useFrame((state) => {
    const { mouse } = state;
    const { width, height } = viewport();
    mousePos[0] = (mouse.x * width) / 2;
    mousePos[1] = (mouse.y * height) / 2;
  });

  return (
    <>
      {!userGameReady && (
        <Html position={[-4, 0, 2]} scaleFactor={25}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStart}
          >
            Please wait for host to start the game...
          </Button>
        </Html>
      )}
      {userGameReady && !!dieImagesFive && !!rotationFive && (
        <Suspense fallback={null}>
          {dicePosition.map((pos, index) => (
            <UserThemedDie
              key={pos.uuid}
              diceInitPos={pos.position}
              rerollAllToggle={reroll}
              rerollValue={rerollArray[index].rerollDie}
              rerollDieToggle={rerollArray[index].reroll}
              imageSet={imageArray[index].images}
              setImages={imageArray[index].setImages}
              geom={geom}
              setOrbitControl={setOrbitControl}
              mousePos={mousePos}
              rotationValues={rotationArray[index].rotation}
            />
          ))}
          <CollisionMesh />
        </Suspense>
      )}
    </>
  );
};

DiceManager.propTypes = {
  reroll: PropTypes.bool,
  setOrbitControl: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

DiceManager.defaultProps = {
  reroll: false,
};

export default DiceManager;
