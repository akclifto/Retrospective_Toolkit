import React, { useRef, Suspense } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
//import { SVGLoader as loader } from './SVGLoader';
import barChart from '../resources/bar_chart.png';
import bubbleChart from '../resources/bubble_chart.png';
import highlight from '../resources/highlight.png';
import insertEmoticon from '../resources/insert_emoticon.png';
import insertPhoto from '../resources/insert_photo.png';
import cloudQueue from '../resources/cloud_queue.png';

/*
Bar_chart
Bubble_chart
Highlight
Insert_emoticon
Insert_photo
Cloud_queue
*/

const Block = () => {
    return (
        <mesh>
            <boxBufferGeometry attach='geometry' args={[10,10,10]} />
            <meshStandardMaterial attach='material' />
        </mesh>
    )
}

const Die = () => {
    const mesh = useRef(null);
    useFrame(() => {mesh.current.rotation.x = mesh.current.rotation.y += 0.01});
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[10,10,10]} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, barChart)} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, bubbleChart)} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, highlight)} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, insertEmoticon)} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, insertPhoto)} />
            <meshStandardMaterial attachArray='material' map={useLoader(TextureLoader, cloudQueue)} />
        </mesh>
    )
}

const Plane = () => {
    return (
        <mesh>
            <planeBufferGeometry attach='geometry' args={[100,100]}/>
            <meshStandardMaterial attach='material' color='red'/>
        </mesh>
    )
}

const ThreeDice = () => {

    return (
        <Canvas camera={{ position: [-5, 8, 15], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <Suspense fallback={<Block />} >
                <Die />
            </Suspense>
        </Canvas>
    )
};

export default ThreeDice;