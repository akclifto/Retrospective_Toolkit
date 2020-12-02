import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { v4 as uuidv4 } from "uuid";

export const gameStart = atom(false);
export const gameReset = atom(false);

export const diceDefault = atom([
  {
    uuid: uuidv4(),
    position: [-13, 5, 6],
  },
  {
    uuid: uuidv4(),
    position: [-13, 6, 4],
  },
  {
    uuid: uuidv4(),
    position: [-13, 7, 5],
  },
  {
    uuid: uuidv4(),
    position: [-13, 5, 5],
  },
  {
    uuid: uuidv4(),
    position: [-13, 6, 2],
  },
]);

export const diceArray = atomWithReset([[]]);
