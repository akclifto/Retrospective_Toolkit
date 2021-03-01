/* istanbul ignore file */
import React from "react";
import { useBox } from "@react-three/cannon";

const CollisionMesh = () => {
  const [floor] = useBox(() => ({
    position: [0, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [14, 0, 22],
    material: { friction: 1000 },
  }));
  const [left] = useBox(() => ({
    position: [-11.1, 1, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [13, 4, 0],
  }));
  const [right] = useBox(() => ({
    position: [11.1, 1, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [13, 4, 0],
  }));
  const [top] = useBox(() => ({
    position: [0, 1, 6.75],
    args: [22, 4, 0],
  }));
  const [bottom] = useBox(() => ({
    position: [0, 1, -6.75],
    args: [22, 4, 0],
  }));
  return (
    <group>
      <mesh ref={floor}>
        <boxBufferGeometry args={[14, 0, 22]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={left}>
        <boxBufferGeometry args={[13.5, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={right}>
        <boxBufferGeometry args={[13.5, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={top}>
        <boxBufferGeometry args={[22.2, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
      <mesh ref={bottom}>
        <boxBufferGeometry args={[22.2, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={0} />
      </mesh>
    </group>
  );
};

export default CollisionMesh;
