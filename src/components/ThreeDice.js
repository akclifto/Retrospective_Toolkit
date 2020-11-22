import React, { Suspense } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, draco, OrbitControls } from 'drei';
import { Physics, useBox } from 'use-cannon';
import { themes } from '../constants/DieConstants'

// work in progress
const ThemedDie = (props) => {
    if (props.theme === 'action') {
        return (
            <Die position={props.position} images={themes.action.images} />
        )
    }
}


const Die = (props) => {
    const [mesh, api] = useBox(() => ({ mass: 1, position: props.position, velocity: [5, 0, -3] ,angularVelocity: [5, 0, 3]}));
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1,1,1]} />
            {props.images.map((image, key) => (                
                // eslint-disable-next-line react-hooks/rules-of-hooks
                <meshStandardMaterial key={key} attachArray='material' map={useLoader(TextureLoader, image)} />
            ))}
            {/*<Theme theme={props.theme} />*/}
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

function Model({ url, props }) {
    const [tray] = useBox(() => ({ 
        type: "Static",
        args: [12, 0, 22],
        position: [0, 1, 0], 
        rotation: [0, -Math.PI / 2, 0],
        ...props}));
    const { scene } = useLoader(GLTFLoader, url, draco())
    return (
        <primitive ref={tray} object={scene} dispose={null} />
    )
}

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                intensity={1.0}
                position={[0, 20, 0]}
            />
        </>
    )
}

const ThreeDice = (props) => {

    return (
            <Canvas concurrent style={{width: '100vw', height: '500px'}} camera={{ position: [0, 20, 12], fov: 50 }} >             
                <Physics>
                    <Suspense fallback={<Html>loading..</Html>}>
                        <ThemedDie position={[-6, 10, 3]} theme='action' />
                        <ThemedDie position={[-5, 9, 4]}  theme='action' />
                        <ThemedDie position={[-7, 10, 3]} theme='action' />
                        <ThemedDie position={[-5, 10, 3]} theme='action' />
                        <ThemedDie position={[-6, 15, 3]} theme='action' />
                        <Model url={'trayModel/tray.glb'} />
                    </Suspense>
                </Physics>
                <Lights />
                <gridHelper args={[50, 50, 'red', 'black']} />
                <OrbitControls />
            </Canvas>
    )
};

export default ThreeDice;