import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Die from './Die';
import './styles.css';

export default function DiceContainer() {

  return (
    <Canvas
      colorManagement
      camera={{
        position: [0, 0, 3],
        fov: 75,
      }}
        >

      <color attach="background" args={['red']} />
      <Suspense fallback={null}>
        <Die />
      </Suspense>
      <OrbitControls />

    </Canvas>
  );
}
