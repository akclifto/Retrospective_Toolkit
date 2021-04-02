import React, { Suspense, useEffect, useMemo } from "react";
import { atom, useAtom } from "jotai";
import PropTypes from "prop-types";
import { BoxBufferGeometry } from "three";
import { uniqueImageSet } from "../Dice/Dice";
import ThemedDie from "./ThemedDie";
import CollisionMesh from "./CollisionMesh";
import { diceDefaultState } from "./gameState";

const dieOneImageState = atom([]);
const dieTwoImageState = atom([]);
const dieThreeImageState = atom([]);
const dieFourImageState = atom([]);
const dieFiveImageState = atom([]);

const rerollDieOne = atom(false);
const rerollDieTwo = atom(false);
const rerollDieThree = atom(false);
const rerollDieFour = atom(false);
const rerollDieFive = atom(false);

/* istanbul ignore next */
const DiceManager = (props) => {
  const { reroll } = props;
  const geom = useMemo(() => new BoxBufferGeometry(), []);

  const [dicePosition] = useAtom(diceDefaultState);
  const [dieImagesOne, setImagesOne] = useAtom(dieOneImageState);
  const [dieImagesTwo, setImagesTwo] = useAtom(dieTwoImageState);
  const [dieImagesThree, setImagesThree] = useAtom(dieThreeImageState);
  const [dieImagesFour, setImagesFour] = useAtom(dieFourImageState);
  const [dieImagesFive, setImagesFive] = useAtom(dieFiveImageState);

  const [rerollOne, toggleRerollOne] = useAtom(rerollDieOne);
  const [rerollTwo, toggleRerollTwo] = useAtom(rerollDieTwo);
  const [rerollThree, toggleRerollThree] = useAtom(rerollDieThree);
  const [rerollFour, toggleRerollFour] = useAtom(rerollDieFour);
  const [rerollFive, toggleRerollFive] = useAtom(rerollDieFive);

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

  useEffect(() => {
    setImagesOne(uniqueImageSet());
    setImagesTwo(uniqueImageSet());
    setImagesThree(uniqueImageSet());
    setImagesFour(uniqueImageSet());
    setImagesFive(uniqueImageSet());
  }, [
    setImagesFive,
    setImagesFour,
    setImagesOne,
    setImagesThree,
    setImagesTwo,
  ]);

  return (
    <Suspense fallback={null}>
      {dicePosition.map((pos, index) => (
        <ThemedDie
          key={pos.uuid}
          dicePos={pos.position}
          rerollAllToggle={reroll}
          rerollValue={rerollArray[index].rerollDie}
          rerollDieToggle={rerollArray[index].reroll}
          imageSet={imageArray[index].images}
          setImages={imageArray[index].setImages}
          geom={geom}
        />
      ))}
      <CollisionMesh />
    </Suspense>
  );
};

DiceManager.propTypes = {
  reroll: PropTypes.bool.isRequired,
};

export default DiceManager;
