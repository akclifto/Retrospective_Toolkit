import React from "react";
import { useAtom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { v4 as uuidv4 } from "uuid";
import { uniqueImageSet } from "../Dice/Dice";
import ThemedDie from "./ThemedDie";
import { diceDefaultState, rerollState } from "./gameState";

const DiceManager = () => {
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

  const [dicePosition] = useAtom(diceDefaultState);
  const [images] = useAtom(diceImageState);
  const [reroll] = useAtom(rerollState);

  return dicePosition.map((pos, index) => (
    <ThemedDie
      key={pos.uuid}
      theme="random"
      dicePos={pos.position}
      rerollToggle={reroll}
      dieIndex={index}
      imageSet={images}
    />
  ));
};

export default DiceManager;
