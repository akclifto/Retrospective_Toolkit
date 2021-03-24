/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
// eslint-disable-next-line no-unused-vars
import { OrbitControls, Html, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Provider } from "jotai";
import { initDiceImages, isDiceInit } from "../Dice/Dice";
import GameManager from "./GameManager";

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
    <div>
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
          }}
        >
          <Physics gravity={[0, -30, 0]} defaultContactMaterial>
            <Provider>
              <GameManager />
            </Provider>
          </Physics>
          <OrbitControls rotateSpeed={0.1} maxPolarAngle={0.35} />
        </Canvas>
      )}
    </div>
  );
};

export default ThreeDice;
