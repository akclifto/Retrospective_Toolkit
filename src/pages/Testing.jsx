import React from "react";
import { v4 as uuidv4 } from "uuid"; // clear annoying console warning about unique keys
import iconsArr from "../constants/IconsDataStructure";
import randomIconSelector from "../components/RandomIconSelector";

// Renders random selected, then renders all icons and name for validation check.
const Testing = () => {
  // Store final array with randomly selected items from iconsArr
  const randomSelected = randomIconSelector(6, iconsArr);
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
