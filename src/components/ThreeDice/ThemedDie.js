import React, { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useGesture, useDrag } from "react-use-gesture";
import { uniqueImageSet } from "../Dice/Dice";

const singleRollSound = () => {
  new Audio("/diceRoll.m4a").play();
};

/* istanbul ignore next */
const ThemedDie = (props) => {
  const {
    diceInitPos,
    rerollAllToggle,
    rerollValue,
    rerollDieToggle,
    imageSet,
    setImages,
    geom,
    setOrbitControl,
    mousePos,
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

  const isDragging = React.useRef(false);

  const clickBind = useGesture({
    onClick: () => {
      if (!isDragging.current) {
        rerollDieToggle(!rerollValue);
        singleRollSound();
      }
    },
  });

  const dragBind = useDrag(
    ({ first, last }) => {
      if (first) {
        setOrbitControl(false);
        isDragging.current = true;
        api.mass.set(0);
        api.collisionResponse.set(0);
      } else if (last) {
        // eslint-disable-next-line no-return-assign
        setTimeout(() => (isDragging.current = false), 100);
        setOrbitControl(true);
        api.mass.set(300);
        api.collisionResponse.set(1);
      }
      api.position.set(mousePos[0], 2, -mousePos[1]);
    },
    {
      initial: () => [mousePos[0], mousePos[1]],
      filterTaps: true,
    }
  );

  useEffect(() => {
    api.position.set(diceInitPos[0], diceInitPos[1], diceInitPos[2]);
    api.velocity.set(15, 0, -10);
    api.angularVelocity.set(-15, 2, -10);
    setImages(uniqueImageSet);
  }, [
    api.angularVelocity,
    api.position,
    api.velocity,
    diceInitPos,
    rerollAllToggle,
    rerollValue,
    setImages,
  ]);

  return (
    <mesh
      ref={mesh}
      geometry={geom}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dragBind()}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...clickBind()}
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
  diceInitPos: PropTypes.arrayOf(PropTypes.number).isRequired,
  imageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  setImages: PropTypes.func.isRequired,
  rerollAllToggle: PropTypes.bool.isRequired,
  rerollValue: PropTypes.bool.isRequired,
  rerollDieToggle: PropTypes.func.isRequired,
  geom: PropTypes.shape().isRequired,
  setOrbitControl: PropTypes.func.isRequired,
  mousePos: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ThemedDie;
