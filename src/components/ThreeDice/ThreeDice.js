import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Provider } from "jotai";
import { initDiceImages, isDiceInit } from "../Dice/Dice";
import GameManager from "./GameManager";

const ThreeDice = () => {
  // Allows the initDiceImages function to load only once on startup.
  const [loading, setLoading] = useState(true);
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
      <Canvas
        concurrent
        invalidateFrameloop
        style={{ width: "100vw", height: "70vh" }}
        camera={{ position: [0, 20, 8], fov: 50 }}
      >
        {loading && <Html center>Loading game textures....</Html>}
        {!loading && (
          <>
            <Physics gravity={[0, -30, 0]} defaultContactMaterial>
              <Provider>
                <GameManager />
              </Provider>
            </Physics>
            <OrbitControls />
          </>
        )}
      </Canvas>
      )
    </>
  );
};

export default ThreeDice;
