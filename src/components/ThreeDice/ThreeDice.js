/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
// eslint-disable-next-line no-unused-vars
import { OrbitControls, Html, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Provider } from "jotai";
import { initDiceImages, isDiceInit } from "../Dice/Dice";
import GameManager from "./GameManager";

const camera = new Canvas.Camera();
const orbitalCamera = new OrbitControls(this.renderer.domElement);
orbitalCamera.rotateSpeed = 0.1;
orbitalCamera.maxPolarAngle = 0.35;
orbitalCamera.keys = {
  UP: 87, // w
  LEFT: 65, // a
  BOTTOM: 83, // s
  RIGHT: 68, // d
};

const ThreeDice = () => {
  // Allows the initDiceImages function to load only once on startup.
  const [loading, setLoading] = useState(true);
  /* istanbul ignore next */
  useEffect(() => {
    if (!isDiceInit()) {
      try {
        const loadDice = async () => {
          if (await initDiceImages()) {
            setLoading(false);
          }
        };
        loadDice();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("ThreeDice.useEffect Error: ", e);
      }
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && (
        <Canvas>
          <Html center>Loading game textures....</Html>
        </Canvas>
      )}
      {!loading && (
        <Canvas
          concurrent
          invalidateFrameloop
          style={{ width: "100vw", height: "70vh" }}
          camera={{
            position: [0, 20, 8],
            fov: 50,
            maxheight: -5 * "100vh",
            maxWidth: -5 * "70vh",
          }}
        >
          <Physics gravity={[0, -30, 0]} defaultContactMaterial>
            <Provider>
              <GameManager />
            </Provider>
          </Physics>
          <orbitalCamera />
        </Canvas>
      )}
    </>
  );
};

export default ThreeDice;
