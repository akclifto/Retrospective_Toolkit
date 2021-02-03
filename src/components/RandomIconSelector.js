import iconsArr from "../constants/IconsDataStructure";

/**
 * RandomIconSelector.js file randomly selects desired number of icons
 * without duplicating any of the icon results.
 */

/**
 * Method compiles an array of randomly selected indeces, ensures no duplication
 * retrieve from IconDataStructure.
 * @param {*} dieNumber: number of die sides to index images.
 * @returns final randomly selected icons array.
 */
export default function getRandom(dieNumber) {
  let rand;
  const maxLen = dieNumber; // assuming this will eventually be (die * sides) = maxLen
  const finalIdx = [];
  const randomIconSelection = [];
  let count = 0;

  // check duplication possibility
  if (maxLen > iconsArr.length) {
    // eslint-disable-next-line no-console
    console.log(
      "RandomIconsSelector.js: function getRandom(dieNumber):",
      "maxLen exceeds total number of Icons available, duplication will occur."
    );
    return [];
  }

  while (count < maxLen) {
    rand = Math.floor(Math.random() * iconsArr.length);

    if (!finalIdx.includes(rand)) {
      finalIdx.push(rand);
      randomIconSelection.push(iconsArr[rand]);
      count += 1;
    }
  }

  return randomIconSelection;
}
