/**
 * RandomIconSelector.js file randomly selects desired number of icons
 * without duplicating any of the icon results.
 */

/**
 * Method compiles an array of randomly selected indeces, ensures no duplication
 * retrieve from IconDataStructure.
 * @param {*} dieNumber: number of die sides to index images.
 * @param {*} fullDiceArray: the array that contains all of the dice objects from AWS
 * @returns final randomly selected icons array.
 */
export default function getRandom(dieNumber, fullDiceArray) {
  let rand;
  const maxLen = dieNumber; // assuming this will eventually be (die * sides) = maxLen
  const finalIdx = [];
  const randomIconSelection = [];
  let count = 0;

  // check duplication possibility
  if (maxLen > fullDiceArray.length) {
    // eslint-disable-next-line no-console
    console.log(
      "RandomIconsSelector.js: function getRandom(dieNumber):",
      "maxLen exceeds total number of Icons available, duplication will occur."
    );
    return [];
  }

  while (count < maxLen) {
    rand = Math.floor(Math.random() * fullDiceArray.length);

    if (!finalIdx.includes(rand)) {
      finalIdx.push(rand);
      randomIconSelection.push(fullDiceArray[rand]);
      count += 1;
    }
  }

  return randomIconSelection;
}
