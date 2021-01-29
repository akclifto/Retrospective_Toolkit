import iconsArr from "../constants/IconsDataStructure";

/**
 * Method to get icon information from iconsArr data structure.
 * @param {*} finalIdx : index of randomly selected indeces to retrieve from iconsArr.
 * @returns icons array.
 */
export function getIcons(finalIdx) {
  const icons = [];

  for (let i = 0; i < finalIdx.length; i += 1) {
    const n = finalIdx[i];
    icons.push(iconsArr[n]);
  }

  return icons;
}

/**
 * Method compiles an array of randomly selected indeces, ensures no duplicated indeces.
 * Calls getIcons to retrieve icon information from iconsArr.
 * Currently hardcoded for 5 die, but can change to implicit representation easily.
 * @param {*} dieNumber: number of die sides to index images.
 * @returns final randomly selected icons array.
 */
export default function getRandom(dieNumber) {
  let rand;
  const maxLen = dieNumber; // assuming this will eventually be (die * sides) = maxLen
  const finalIdx = [];
  let count = 0;

  while (count < maxLen) {
    rand = Math.floor(Math.random() * iconsArr.length);

    if (!finalIdx.includes(rand)) {
      finalIdx.push(rand);
      count += 1;
    }
  }

  const ret = getIcons(finalIdx);
  return ret;
}
