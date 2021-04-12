/* eslint-disable no-console */
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import PropTypes from "prop-types";
import { BoxBufferGeometry } from "three";
import { useThree, useFrame } from "react-three-fiber";
import { uniqueImageSet } from "../Dice/Dice";
import HostThemedDie from "./HostThemedDie";
import CollisionMesh from "./CollisionMesh";
import { diceDefaultState } from "./gameState";

const newRotationArray = () => [Math.random(), Math.random(), Math.random()];

/* istanbul ignore next */
const DiceManager = (props) => {
  const { reroll, setOrbitControl, socket, roomId, gameStatus } = props;
  const geom = useMemo(() => new BoxBufferGeometry(), []);

  const [dicePosition] = useAtom(diceDefaultState);

  const [userGameReady, setUserReady] = useState(gameStatus);
  const [initialRoll, setInitialRoll] = useState(true);

  const [dieImagesOne, setImagesOne] = useState(uniqueImageSet());
  const [dieImagesTwo, setImagesTwo] = useState(uniqueImageSet());
  const [dieImagesThree, setImagesThree] = useState(uniqueImageSet());
  const [dieImagesFour, setImagesFour] = useState(uniqueImageSet());
  const [dieImagesFive, setImagesFive] = useState(uniqueImageSet());

  const [rerollOne, toggleRerollOne] = useState(false);
  const [rerollTwo, toggleRerollTwo] = useState(false);
  const [rerollThree, toggleRerollThree] = useState(false);
  const [rerollFour, toggleRerollFour] = useState(false);
  const [rerollFive, toggleRerollFive] = useState(false);

  const [rotationOne, setRotationOne] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const [rotationTwo, setRotationTwo] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const [rotationThree, setRotationThree] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const [rotationFour, setRotationFour] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const [rotationFive, setRotationFive] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  const imageArray = [
    { images: dieImagesOne, setImages: setImagesOne },
    { images: dieImagesTwo, setImages: setImagesTwo },
    { images: dieImagesThree, setImages: setImagesThree },
    { images: dieImagesFour, setImages: setImagesFour },
    { images: dieImagesFive, setImages: setImagesFive },
  ];

  const userImageArray = [
    dieImagesOne,
    dieImagesTwo,
    dieImagesThree,
    dieImagesFour,
    dieImagesFive,
  ];

  const userRotationArray = [
    rotationOne,
    rotationTwo,
    rotationThree,
    rotationFour,
    rotationFive,
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

  useEffect(() => {
    if (!initialRoll && userGameReady) {
      const newImageArray = [];
      const newRotArray = [];

      for (let i = 0; i < 5; i += 1) {
        newImageArray.push(uniqueImageSet());
        imageArray[i].setImages(newImageArray[i]);
        newRotArray.push(newRotationArray());
        rotationArray[i].setRotation(newRotArray[i]);
      }

      socket.emit("host:newRoll", roomId, newRotArray, newImageArray);
    } else if (!userGameReady) {
      console.log("starting game");
      socket.emit("game:start", roomId, userRotationArray, userImageArray);
      setUserReady(true);
      setInitialRoll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reroll]);

  useEffect(() => {
    if (userGameReady) {
      socket.emit("get:update", roomId);
      setInitialRoll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("user:init", (rotationValues, imagesArray) => {
      // eslint-disable-next-line array-callback-return
      imagesArray.map((image, index) => {
        imageArray[index].setImages(image);
        rotationArray[index].setRotation(rotationValues[index]);
      });
    });
    socket.on("user:initQueue", (rollObject) => {
      if (rollObject.die === null) {
        // eslint-disable-next-line array-callback-return
        rollObject.image.map((image, index) => {
          imageArray[index].setImages(image);
          rotationArray[index].setRotation(rollObject.rotation[index]);
        });
      } else {
        // eslint-disable-next-line array-callback-return
        imageArray[rollObject.die].setImages(rollObject.image);
        rotationArray[rollObject.die].setRotation(rollObject.rotation);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!initialRoll) {
      const newImage = uniqueImageSet();
      const newRotation = newRotationArray();
      imageArray[0].setImages(newImage);
      rotationArray[0].setRotation(newRotation);
      socket.emit("host:newDieRoll", roomId, newRotation, newImage, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerollOne]);

  useEffect(() => {
    if (!initialRoll) {
      const newImage = uniqueImageSet();
      const newRotation = newRotationArray();
      imageArray[1].setImages(newImage);
      rotationArray[1].setRotation(newRotation);
      socket.emit("host:newDieRoll", roomId, newRotation, newImage, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerollTwo]);

  useEffect(() => {
    if (!initialRoll) {
      const newImage = uniqueImageSet();
      const newRotation = newRotationArray();
      imageArray[2].setImages(newImage);
      rotationArray[2].setRotation(newRotation);
      socket.emit("host:newDieRoll", roomId, newRotation, newImage, 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerollThree]);

  useEffect(() => {
    if (!initialRoll) {
      const newImage = uniqueImageSet();
      const newRotation = newRotationArray();
      imageArray[3].setImages(newImage);
      rotationArray[3].setRotation(newRotation);
      socket.emit("host:newDieRoll", roomId, newRotation, newImage, 3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerollFour]);

  useEffect(() => {
    if (!initialRoll) {
      const newImage = uniqueImageSet();
      const newRotation = newRotationArray();
      imageArray[4].setImages(newImage);
      rotationArray[4].setRotation(newRotation);
      socket.emit("host:newDieRoll", roomId, newRotation, newImage, 4);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerollFive]);

  const { viewport } = useThree();
  const mousePos = [];

  useFrame((state) => {
    const { mouse } = state;
    const { width, height } = viewport();
    mousePos[0] = (mouse.x * width) / 2;
    mousePos[1] = (mouse.y * height) / 2;
  });

  return (
    <Suspense fallback={null}>
      {dicePosition.map((pos, index) => (
        <HostThemedDie
          key={pos.uuid}
          diceInitPos={pos.position}
          rerollValue={rerollArray[index].rerollDie}
          rerollDieToggle={rerollArray[index].reroll}
          imageSet={imageArray[index].images}
          geom={geom}
          setOrbitControl={setOrbitControl}
          mousePos={mousePos}
          rotationValues={rotationArray[index].rotation}
        />
      ))}
      <CollisionMesh />
    </Suspense>
  );
};

DiceManager.propTypes = {
  reroll: PropTypes.bool,
  setOrbitControl: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
  gameStatus: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

DiceManager.defaultProps = {
  reroll: false,
};

export default DiceManager;
