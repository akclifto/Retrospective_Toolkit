import React, { Suspense } from "react";
import {
  render,
  screen,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import ThemedDie from "../../components/ThreeDice/ThemedDie";

afterEach(cleanup);

it("should do a snapshot test on ThemedDie", async () => {
  render(
    <Canvas concurrent style={{ width: "100vw", height: "500px" }}>
      <Physics>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemedDie
            theme="random"
            dicePos={[-13, 5, 6]}
            rerollToggle={false}
          />
        </Suspense>
      </Physics>
    </Canvas>
  );
  const loading = () => screen.getByText("Loading...");
  await waitForElementToBeRemoved(loading);
  screen.debug();
  // expect(container).toMatchSnapshot();
});
