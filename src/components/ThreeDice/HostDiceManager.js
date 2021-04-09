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

/* istanbul ignore next */
const DiceManager = (props) => {
  const { reroll, setOrbitControl, socket, roomId } = props;
  const geom = useMemo(() => new BoxBufferGeometry(), []);

  const [dicePosition] = useAtom(diceDefaultState);

  const [userGameReady, setUserReady] = useState(false);

  const [dieImagesOne, setImagesOne] = useState(uniqueImageSet);
  const [dieImagesTwo, setImagesTwo] = useState(uniqueImageSet);
  const [dieImagesThree, setImagesThree] = useState(uniqueImageSet);
  const [dieImagesFour, setImagesFour] = useState(uniqueImageSet);
  const [dieImagesFive, setImagesFive] = useState(uniqueImageSet);

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
    console.log(`Inside useEffect: ${imageArray[0].images}`);
    if (userGameReady)
      socket.emit("host:newRoll", roomId, userRotationArray, userImageArray);
    else {
      socket.emit("game:start", roomId, userRotationArray, userImageArray);
      setUserReady(true);
    }
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
    <Suspense fallback={null}>
      {dicePosition.map((pos, index) => (
        <HostThemedDie
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
          setRotationValues={rotationArray[index].setRotation}
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
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};

DiceManager.defaultProps = {
  reroll: false,
};

export default DiceManager;
