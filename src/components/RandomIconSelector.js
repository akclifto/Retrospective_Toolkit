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

  // check dice icons for availability
  if (fullDiceArray.length === 0) {
    // eslint-disable-next-line no-console
    console.log(
      "RandomIconsSelector.js: function getRandom():",
      `No Icons available in fullDiceArray. Icons available: ${fullDiceArray.length}.`
    );
    return [];
  }
  // check duplication possibility
  if (maxLen > fullDiceArray.length) {
    // eslint-disable-next-line no-console
    console.log(
      "RandomIconsSelector.js: function getRandom():",
      `maxLen exceeds total number of Icons available, duplication will occur.
      maxLen: ${maxLen}, Icons Available: ${fullDiceArray.length}.`
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
