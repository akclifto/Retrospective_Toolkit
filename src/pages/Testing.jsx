import React from "react";
import { v4 as uuidv4 } from "uuid"; // clear annoying console warning about unique keys
import iconsArr from "../constants/IconsDataStructure";

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

function getRandom(dieNumber) {
  let rand;
  const loopLength = iconsArr.length * 10;
  const finalIdx = [];
  let count = 0;

  for (let i = 0; i < loopLength; i += 1) {
    rand = Math.floor(Math.random() * iconsArr.length + 1);

    if (count === dieNumber) {
      // eslint-disable-next-line no-console
      console.log(finalIdx);
      break;
    }

    if (!finalIdx.includes(rand)) {
      finalIdx.push(rand);
      count += 1;
    }
  }
  const ret = getIcons(finalIdx);
  return ret;
}

const randomSelected = getRandom(36);
// eslint-disable-next-line no-console
// console.log(randomSelected);

// iterate and renders array.
const Testing = () => (
  <div>
    <h2>Random Selected: </h2>
    <div>
      {randomSelected.map((icon) => (
        <span>
          <img src={icon} alt={icon} />{" "}
        </span>
      ))}
    </div>
    <h1>Testing DS -- Total Items: {iconsArr.length} </h1>
    {iconsArr.map((icon) => (
      <div>
        <li key={uuidv4()}>
          {" "}
          <img src={icon} alt={icon} /> Name: {icon}
        </li>
      </div>
    ))}
  </div>
);

export default Testing;
