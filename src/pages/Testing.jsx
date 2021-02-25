import React from "react";
import iconsArr from "../constants/IconsDataStructure";
import randomIconSelector from "../components/RandomIconSelector";

let index = 0;

const setIndex = () => {
  index += 1;
  return index;
};

// Renders random selected, then renders all icons and name for validation check.
const Testing = () => {
  // Store final array with randomly selected items from iconsArr
  const randomSelected = randomIconSelector(6, iconsArr);
  return (
    <div>
      <h2>Random Selected: {randomSelected.length} </h2>
      <div>
        {randomSelected.map((icon) => (
          <span key={setIndex()}>
            <img src={icon} alt={icon} />{" "}
          </span>
        ))}
      </div>
      <h1>Testing DS -- Total Items: {iconsArr.length} </h1>
      {iconsArr.map((icon) => (
        <div key={setIndex()}>
          <li>
            {" "}
            <img src={icon} alt={icon} /> Name: {icon}
          </li>
        </div>
      ))}
    </div>
  );
};

export default Testing;
