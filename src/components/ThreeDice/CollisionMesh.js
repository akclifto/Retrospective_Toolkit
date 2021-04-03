/* istanbul ignore file */
import React from "react";
import { useBox } from "@react-three/cannon";

const CollisionMesh = () => {
  const [floor] = useBox(() => ({
    position: [0.22, 0, 0.3],
    rotation: [0, -Math.PI / 2, 0],
    args: [18.5, 2.43, 36.5],
    material: { friction: 1000 },
  }));
  const [left] = useBox(() => ({
    position: [-18.05, 2, 0.35],
    rotation: [0, -Math.PI / 2, 0],
    args: [20, 4, 1],
  }));
  const [right] = useBox(() => ({
    position: [18.48, 2, 0.35],
    rotation: [0, -Math.PI / 2, 0],
    args: [16, 4, 0],
  }));
  const [bottom] = useBox(() => ({
    position: [0.22, 2, 9.53],
    args: [37, 4, 0],
  }));
  const [top] = useBox(() => ({
    position: [0.22, 2, -8.73],
    args: [37, 4, 0],
  }));
  return (
    <group>
      <mesh ref={floor}>
        <boxBufferGeometry args={[18.5, 0, 36.5]} />
        <meshStandardMaterial color="yellow" transparent opacity={0} />
      </mesh>
      <mesh ref={left}>
        <boxBufferGeometry args={[18.36, 4, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={right}>
        <boxBufferGeometry args={[18.36, 4, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={bottom}>
        <boxBufferGeometry args={[36.52, 4, 0]} />
        <meshStandardMaterial color="green" transparent opacity={0} />
      </mesh>
      <mesh ref={top}>
        <boxBufferGeometry args={[36.52, 4, 0]} />
        <meshStandardMaterial color="green" transparent opacity={0} />
      </mesh>
    </group>
  );
};

export default CollisionMesh;
