import React from "react";
import { v4 as uuidv4 } from "uuid"; // clear annoying console warning about unique keys
import iconsArr from "../constants/IconsDataStructure";

/**
 * Method to get icon information from iconsArr data structure.
 * @param {*} finalIdx : index of randomly selected indeces to retrieve from iconsArr.
 * @returns icons array.
 */
function getIcons(finalIdx) {
  const icons = [];
  for (let i = 0; i < finalIdx.length; i += 1) {
    const n = finalIdx[i];
    icons.push(iconsArr[n]);
  }
  // eslint-disable-next-line no-console
  // console.log(icons);
  return icons;
}

/**
 * Method compiles an array of randomly selected indeces, ensures no duplicated indeces.
 * Calls getIcons to retrieve icon information from iconsArr.
 * Currently hardcoded for 5 die, but can change to implicit representation easily.
 * @param {*} dieNumber: number of die sides to index images.
 * @returns final randomly selected icons array.
 */
function getRandom(dieNumber) {
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
  // eslint-disable-next-line no-console
  // console.log(finalIdx);
  const ret = getIcons(finalIdx);
  // eslint-disable-next-line no-console
  // console.log(ret);
  return ret;
}

// Exported component.  Renders random selected,
// then renders all icons and name for validation check.
const Testing = () => {
  // Store final array with randomly selected items from iconsArr
  const randomSelected = getRandom(6);
  return (
    <div>
      <h2>Random Selected: {randomSelected.length} </h2>
      <div>
        {randomSelected.map((icon) => (
          <span>
            <img src={icon} alt={icon} key={uuidv4()} />{" "}
          </span>
        ))}
      </div>
      <h1>Testing DS -- Total Items: {iconsArr.length} </h1>
      {iconsArr.map((icon) => (
        <div>
          <li key={uuidv4()}>
            {" "}
            <img src={icon} alt={icon} key={uuidv4()} /> Name: {icon}
          </li>
        </div>
      ))}
    </div>
  );
};

export default Testing;
