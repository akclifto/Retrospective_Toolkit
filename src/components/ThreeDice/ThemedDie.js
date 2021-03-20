import React, { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { uniqueImageSet } from "../Dice/Dice";
import { Vector3 } from "three";
import * as THREE from "@react-three/cannon";

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
      <arrowHelper />
      const mat = new THREE.LineBasicMaterial( { color = 0x0000ff } );
      const origin = new THREE.Vector3( 0, 0, 0);
      const endpt = new THREE.Vector3 (0, 0, 5);
      const points = [];
      points.push( origin );
      points.push ( endpt );
      const geo = THREE.BufferGeometry().setFromPoints ( points );
      const line = new THREE.Line( geo, mat);
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
