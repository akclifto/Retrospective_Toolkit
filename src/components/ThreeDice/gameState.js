import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";

export const gameStartState = atom(false);
export const rerollState = atom(false);

export const diceDefaultState = atom([
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
