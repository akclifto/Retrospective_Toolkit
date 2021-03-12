/* istanbul ignore file */
import React from "react";
import { useBox } from "@react-three/cannon";

const CollisionMesh = () => {
  const [floor] = useBox(() => ({
    position: [0, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [14, 2, 22],
    material: { friction: 1000 },
  }));
  const [left] = useBox(() => ({
    position: [-14.1, 1, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [16, 4, 0],
  }));
  const [right] = useBox(() => ({
    position: [14.1, 1, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [16, 4, 0],
  }));
  const [top] = useBox(() => ({
    position: [0, 1, 8],
    args: [28, 4, 0],
  }));
  const [bottom] = useBox(() => ({
    position: [0, 1, -8],
    args: [28, 4, 0],
  }));
  return (
    <group>
      <mesh ref={floor}>
        <boxBufferGeometry args={[15.5, 2, 28]} />
        <meshStandardMaterial color="red" transparent opacity={10} />
      </mesh>
      <mesh ref={left}>
        <boxBufferGeometry args={[16.5, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={10} />
      </mesh>
      <mesh ref={right}>
        <boxBufferGeometry args={[16.5, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={10} />
      </mesh>
      <mesh ref={top}>
        <boxBufferGeometry args={[28.2, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={10} />
      </mesh>
      <mesh ref={bottom}>
        <boxBufferGeometry args={[28.2, 2, 0]} />
        <meshStandardMaterial color="red" transparent opacity={10} />
      </mesh>
    </group>
  );
};

export default CollisionMesh;
