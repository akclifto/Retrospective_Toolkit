import React, { Suspense } from "react";
import { shallow } from "enzyme";
// import { useBox } from "@react-three/cannon";

import ThemedDie from "../../components/ThreeDice/ThemedDie";

/*
jest.mock("@react-three/cannon", () => ({
  useBox: () => ({
    mesh: {
      mass: 300,
      inertia: 13,
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      linearDamping: 0.5,
      angularDamping: 0.1,
      material: { restitution: 0.3 },
    },
    api: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      velocity: [0, 0, 0],
      angularVelocity: [0, 0, 0],
      linearFactor: [0, 0, 0],
      angularFactor: [0, 0, 0],
      applyForce: jest.fn(),
      applyImpulse: jest.fn(),
      applyLocalForce: jest.fn(),
      applyLocalImpulse: jest.fn(),
    },
  }),
}));
*/
describe("ThreeDice/ThemedDie Testing", () => {
  it("should do a snapshot test on ThemedDie", async () => {
    const wrapper = shallow(
      <Suspense fallback={<div>Loading...</div>}>
        <ThemedDie
          dicePos={[-13, 5, 6]}
          rerollValue={false}
          rerollAllToggle={false}
          rerollDieToggle={() => {}}
          imageSet={[""]}
          setImages={() => {}}
          testID="testDie"
        />
      </Suspense>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
