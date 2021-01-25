import React from "react";
import iconsArr from "../constants/IconsDataStructure";

// iterate and renders array.
const Testing = () => {
  return (
    <div>
      <h1>Testing DS -- Total Items: {iconsArr.length} </h1>
      {iconsArr.map((icon) => (
        <div>
          <li key={icon}>
            {" "}
            <img src={icon} alt={icon} /> Name: {icon}
          </li>
        </div>
      ))}
    </div>
  );
};

export default Testing;
