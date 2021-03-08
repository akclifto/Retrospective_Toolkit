import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Provider } from "jotai";
import { initDiceImages } from "../Dice/Dice";
import GameManager from "./GameManager";

const ThreeDice = () => {
  // Allows the initDiceImages function to load only once on startup.
  useEffect(() => {
    const loadDice = async () => {
      await initDiceImages();
    };
    loadDice();
  }, []);
  return (
    <Canvas
      concurrent
      style={{ width: "100vw", height: "70vh" }}
      camera={{ position: [0, 20, 8], fov: 50 }}
    >
      <Provider>
        <Physics gravity={[0, -30, 0]} defaultContactMaterial>
          <GameManager />
        </Physics>
      </Provider>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDice;
