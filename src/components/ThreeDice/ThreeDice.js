import React, { Suspense, useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, draco, OrbitControls, useProgress } from 'drei';
import { Physics, useBox } from 'use-cannon';
import { themes } from '../../constants/DieConstants';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Provider, useAtom } from 'jotai';
//import { useResetAtom } from 'jotai/utils'
import { gameStart, diceDefault, gameReset } from './gameState';
import PropTypes from 'prop-types';

function GameManager() {
    const [gameStarted, setGameState] = useAtom(gameStart);
    //const [onReset, setReset] = useAtom(gameReset);

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
          width: "120px",
        },
        buttonStart: {
            margin: theme.spacing(1),
            width: "160px",
          },
      }));
         
    const classes = useStyles();

    function Loader() {
        const { progress} = useProgress()
        return <Html center>{Math.trunc(progress)} % loaded</Html>
      }

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Model url={'trayModel/tray.glb'} />
            </Suspense>
            {!gameStarted &&
                <Html position={[-4, 0, 2]}  scaleFactor={25}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonStart}
                        endIcon={<Icon>casino</Icon>}
                        onClick={() => {setGameState(true)}}
                        >
                        Start Game
                    </Button>
                </Html>}
            {gameStarted &&
            <>
                <Suspense fallback={null}>
                    <ThemedDie />
                    <CollisionMesh />
                </Suspense>
                <Html position={[-3, 0, 9]} scaleFactor={25}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>casino</Icon>}
                        onClick={() => {/*setReset(true)*/}}
                    >
                        Roll It!
                    </Button>
                </Html>
            </>
            }
            {/*onReset &&
            <>
                <Suspense fallback={null}>
                    <ThemedDie />
                    <CollisionMesh />
                </Suspense>
                <Html position={[-3, 0, 9]} scaleFactor={25}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>casino</Icon>}
                    onClick={() => {setReset(true)}}
                >
                    Reset Reached
                    </Button>
                </Html>
                </>
            */}
        </>
    )
}

const ThemedDie = (props) => {
    //const [position, setPosition] = useAtom(diceArray)
    const [dicePos] = useAtom(diceDefault)
    const [onReset, setReset] = useAtom(gameReset);

    if (props.theme === 'action') {
        return (
            null
        )
    }

    if (onReset)
    {
        setReset(false);
        return (
            null
        )
    }

    else {    
        return (
            dicePos.map((pos, key) => {              
                return (
                    <Die key={key} index={key} position={pos} images={themes.action.images} />
                )} )
            )
    }
}

const Die = (props) => {
    const velocity = useRef([0, 0, 0])
    const angVelocity = useRef([0, 0, 0])
    const [mesh, api] = useBox(() => ({ mass: 300, inertia: 13, position: props.position, rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI], velocity: [15, 0, -10] , angularVelocity: [-15, 2, -10], linearDamping: 0.1, angularDamping: 0.1, material: {restitution: 0.3}}));

    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v))
        api.angularVelocity.subscribe((av) => (angVelocity.current = av))
    }, [api.velocity, api.angularVelocity])
    return (
        <mesh onClick={() => {api.position.set(props.position[0], props.position[1], props.position[2]); api.velocity.set(15, 0, -10); api.angularVelocity.set(-15, 2, -10) }} ref={mesh}>
            <boxBufferGeometry />
            {props.images.map((image, key) => (                
                // eslint-disable-next-line react-hooks/rules-of-hooks
                <meshStandardMaterial flatShading roughness={0.8} key={key} attachArray='material' map={useLoader(TextureLoader, image)} />
            ))}
        </mesh>
    )
}
Die.propTypes = {
    images: PropTypes.array.isRequired,
    position: PropTypes.arrayOf(PropTypes.number).isRequired
}

const CollisionMesh = () => {
    const [floor] = useBox(() => ({ type: 'Static', position: [0.5, 0, 0], rotation: [0 , -Math.PI/2, 0], args: [14, 0, 22], material: {friction: 10}}));
    const [left] = useBox(() => ({ type: 'Static', position: [-10.5, 1, 0], rotation: [0 , -Math.PI/2, 0], args: [13, 4, 0]}));
    const [right] = useBox(() => ({ type: 'Static', position: [11.3, 1, 0], rotation: [0 , -Math.PI/2, 0], args: [13, 4, 0]}));
    const [top] = useBox(() => ({ type: 'Static', position: [0.5, 1, 6.5], args: [22, 4, 0]}));
    const [bottom] = useBox(() => ({ type: 'Static', position: [0.5, 1, -6.5], args: [22, 4, 0]}));
    return (
        <group>
            <mesh ref={floor}>
                <boxBufferGeometry args={[14, 0, 22]}/>
                <meshStandardMaterial receiveShadow color='red' transparent opacity={0} />               
            </mesh>
            <mesh ref={left}>
                <boxBufferGeometry args={[13, 4, 0]}/>
                <meshStandardMaterial color='red' transparent opacity={0}/>
            </mesh>
            <mesh ref={right}>
                <boxBufferGeometry args={[13, 4, 0]}/>
                <meshStandardMaterial color='red' transparent opacity={0}/>
            </mesh>
            <mesh ref={top}>
                <boxBufferGeometry args={[22, 4, 0]}/>
                <meshStandardMaterial attach='material' color='red' transparent opacity={0} />
            </mesh>
            <mesh ref={bottom}>
                <boxBufferGeometry args={[22, 4, 0]}/>
                <meshStandardMaterial color='red' transparent opacity={0}/>
            </mesh>
        </group>
    )
}

function Model({ url }) {

    const { scene } = useLoader(GLTFLoader, url, draco())
    return (
        <group>
            <primitive rotation={[0, -Math.PI / 2, 0]} object={scene} dispose={null} />
        </group>
    )
}

Model.propTypes = {
    url: PropTypes.string.isRequired
}

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                intensity={1.0}
                position={[0, 20, 0]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
        </>
    )
}

const ThreeDice = () => {  
    return (
            <Canvas shadowMap concurrent style={{width: '100vw', height: '500px'}} camera={{ position: [0, 20, 12], fov: 50 }} >  
                <Lights />
                <Provider>        
                    <Physics gravity={[0, -30, 0]}>
                        <GameManager />
                    </Physics>
                </Provider>   
                <OrbitControls />
            </Canvas>
    )
};

export default ThreeDice;