import React from 'react';
import { useTexture } from "@react-three/drei";
import image from './images/test1.jpg';

const Die = () => {

    // Load the texture. This is a single texture that will be placed on all 6 sides of the cube
    const testImage = useTexture({image});

    return (
        <mesh visible position={[0, 0, 0]} rotation={[10, 20, 0]}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" map={ testImage } />
        </mesh>
    );
};

export default Die;
