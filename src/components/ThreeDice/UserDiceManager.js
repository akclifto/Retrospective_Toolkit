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
const UserDiceManager = (props) => {
  const { setOrbitControl, socket, roomId, gameStatus } = props;
  const geom = useMemo(() => new BoxBufferGeometry(), []);

  const [userGameReady, setUserReady] = useState(gameStatus);
  const [waitingForInit, setWaitingForInit] = useState(true);

  const [dicePosition] = useAtom(diceDefaultState);

  const [dieImagesOne, setImagesOne] = useState();
  const [dieImagesTwo, setImagesTwo] = useState();
  const [dieImagesThree, setImagesThree] = useState();
  const [dieImagesFour, setImagesFour] = useState();
  const [dieImagesFive, setImagesFive] = useState();

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
    if (waitingForInit && userGameReady) {
      socket.emit("get:update", roomId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitingForInit, userGameReady]);

  useEffect(() => {
    socket.on("user:init", (rotationValues, imagesArray) => {
      // eslint-disable-next-line array-callback-return
      imagesArray.map((image, index) => {
        imageArray[index].setImages(image);
        rotationArray[index].setRotation(rotationValues[index]);
      });
      setWaitingForInit(false);
    });
    socket.on("user:initQueue", (rollObject) => {
      if (rollObject.die === null) {
        // eslint-disable-next-line array-callback-return
        rollObject.image.map((image, index) => {
          imageArray[index].setImages(image);
          rotationArray[index].setRotation(rollObject.rotation[index]);
        });
        setWaitingForInit(false);
      } else {
        // eslint-disable-next-line array-callback-return
        imageArray[rollObject.die].setImages(rollObject.image);
        rotationArray[rollObject.die].setRotation(rollObject.rotation);
      }
    });
    socket.on("user:getRoll", (rotationValues, imagesArray) => {
      // eslint-disable-next-line array-callback-return
      imagesArray.map((image, index) => {
        imageArray[index].setImages(image);
        rotationArray[index].setRotation(rotationValues[index]);
      });
      if (!userGameReady) setUserReady(true);
      if (waitingForInit) setWaitingForInit(false);
    });
    socket.on("user:getDieRoll", (rotationValue, newImage, index) => {
      imageArray[index].setImages(newImage);
      rotationArray[index].setRotation(rotationValue);
      setWaitingForInit(false);
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
      {!waitingForInit && (
        <Suspense fallback={null}>
          {dicePosition.map((pos, index) => (
            <UserThemedDie
              key={pos.uuid}
              diceInitPos={pos.position}
              rotationValues={rotationArray[index].rotation}
              imageSet={imageArray[index].images}
              setImages={imageArray[index].setImages}
              geom={geom}
              setOrbitControl={setOrbitControl}
              mousePos={mousePos}
            />
          ))}
          <CollisionMesh />
        </Suspense>
      )}
    </>
  );
};

UserDiceManager.propTypes = {
  setOrbitControl: PropTypes.func.isRequired,
  gameStatus: PropTypes.bool.isRequired,
  roomId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

export default UserDiceManager;
