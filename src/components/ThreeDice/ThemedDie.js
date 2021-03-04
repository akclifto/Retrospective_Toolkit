import React, { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import PropTypes from "prop-types";
import { randomDiceImages as themes } from "../Dice/Dice";

// let textures = [];

/* istanbul ignore next */
const ThemedDie = (props) => {
  const { theme, dicePos, rerollToggle } = props;
  const textures = useTexture([...themes]);

  const [mesh, api] = useBox(() => ({
    mass: 300,
    inertia: 13,
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
    linearDamping: 0.5,
    angularDamping: 0.1,
    material: { restitution: 0.3 },
  }));

  useEffect(() => {
    api.position.set(dicePos[0], dicePos[1], dicePos[2]);
    api.velocity.set(15, 0, -10);
    api.angularVelocity.set(-15, 2, -10);
  }, [api.angularVelocity, api.position, api.velocity, dicePos, rerollToggle]);

  if (theme === "random") {
    return (
      <mesh
        onClick={() => {
          api.position.set(dicePos[0], dicePos[1], dicePos[2]);
          api.velocity.set(15, 0, -10);
          api.angularVelocity.set(-15, 2, -10);
        }}
        ref={mesh}
      >
        <boxBufferGeometry />
        {textures.map((image) => (
          <meshStandardMaterial
            key={image.uuid}
            flatShading
            roughness={0.8}
            attachArray="material"
            map={image}
          />
        ))}
      </mesh>
    );
  }

  // if we are here, something has gone wrong
  return new Error("problem encountered in ThemedDice");
};

ThemedDie.propTypes = {
  theme: PropTypes.string.isRequired,
  dicePos: PropTypes.arrayOf(PropTypes.number).isRequired,
  rerollToggle: PropTypes.bool.isRequired,
};

export default ThemedDie;
