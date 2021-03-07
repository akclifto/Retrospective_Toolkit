import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Provider } from "jotai";
import { initDiceImages } from "../Dice/Dice";
import GameManager from "./GameManager";

const ThreeDice = () => {
  // Allows the initDiceImages function to load only once on startup.
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadDice = async () => {
      // eslint-disable-next-line no-console
      console.log("images loading!");
      if (await initDiceImages()) {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log("images loaded");
      }
    };
    loadDice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          style={{ width: "100vw", height: "500px" }}
          camera={{ position: [0, 20, 8], fov: 50 }}
        >
          <Physics gravity={[0, -30, 0]} defaultContactMaterial>
            <Provider>
              <GameManager />
            </Provider>
          </Physics>
          <OrbitControls />
        </Canvas>
      )}
    </>
  );
};

export default ThreeDice;
