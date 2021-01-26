import React from "react";
import iconsArr from "../constants/IconsDataStructure";

// iterate and renders array.
const Testing = () => (
  <div>
    <h1>Testing DS -- Total Items: {iconsArr.length} </h1>
    {iconsArr.map((icon) => (
      <div>
        <ul key={icon.id}>
          {" "}
          <img src={icon} alt={icon} /> Name: {icon}
        </ul>
      </div>
    ))}
  </div>
);

export default Testing;
