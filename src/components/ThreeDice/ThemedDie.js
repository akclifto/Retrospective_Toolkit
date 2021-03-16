import React, { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { uniqueImageSet } from "../Dice/Dice";

// TODO: Update sound file for single dice roll
const singleRollSound = () => {
  new Audio("/diceRoll.m4a").play();
};

/* istanbul ignore next */
const ThemedDie = (props) => {
  const {
    dicePos,
    rerollAllToggle,
    rerollValue,
    rerollDieToggle,
    imageSet,
    setImages,
  } = props;
  const textures = useTexture([...imageSet]);

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
    setImages(uniqueImageSet);
  }, [
    api.angularVelocity,
    api.position,
    api.velocity,
    dicePos,
    rerollAllToggle,
    rerollValue,
    setImages,
  ]);
  return (
    <mesh
      onClick={() => {
        rerollDieToggle(!rerollValue);
        singleRollSound();
      }}
      ref={mesh}
    >
      <boxBufferGeometry />
      {textures.map((image) => (
        <meshStandardMaterial
          key={uuidv4()}
          flatShading
          roughness={0.8}
          attachArray="material"
          map={image}
        />
      ))}
    </mesh>
  );
};

ThemedDie.propTypes = {
  dicePos: PropTypes.arrayOf(PropTypes.number).isRequired,
  imageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  setImages: PropTypes.func.isRequired,
  rerollAllToggle: PropTypes.bool.isRequired,
  rerollValue: PropTypes.bool.isRequired,
  rerollDieToggle: PropTypes.func.isRequired,
};

export default ThemedDie;
