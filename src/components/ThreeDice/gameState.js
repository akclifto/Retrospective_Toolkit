import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils'

export const gameStart = atom(false);
export const gameReset = atom(false);

export const diceDefault = atom([[-13, 5, 6], [-13, 6, 4], [-13, 7, 5], [-13, 5, 5], [-13, 6, 2]]);

export const diceArray = atomWithReset([[]]);
