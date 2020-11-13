import React, { useRef, Suspense } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//import { SVGLoader as loader } from './SVGLoader';
import { Html, draco, OrbitControls } from 'drei';
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

const Die = () => {
    const mesh = useRef(null);
    useFrame(() => {mesh.current.rotation.x = mesh.current.rotation.y += 0.01});
    return (
        <mesh position={[0,0,1]} ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1,1,1]} />
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

function Model({ url }) {
    const { scene } = useLoader(GLTFLoader, url, draco())
    return <primitive scale={[6,6,6]} rotation={[-Math.PI / 2, -Math.PI / 2 , Math.PI]} position={[-10.5, 0, -2]} object={scene} dispose={null} />
  }

const ThreeDice = () => {

    return (
            <Canvas style={{width: '100vw', height: '250px'}} camera={{ position: [0, 0, 6], fov: 60 }}>             
                <directionalLight position={[0, 0, 20]} />
                <ambientLight intensity={0.3} />
                <Suspense fallback={<Html>loading..</Html>}>
                    <Die />
                </Suspense>
                <Suspense fallback={<Html>loading..</Html>}>
                    <Model url={'trayModel/tray.gltf'} />
                </Suspense>
                <gridHelper />
                <OrbitControls />
            </Canvas>
    )
};

export default ThreeDice;