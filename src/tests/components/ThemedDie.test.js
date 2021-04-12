/* eslint-disable no-console */
import React, { Suspense } from "react";
import { shallow } from "enzyme";
import ThemedDie from "../../components/ThreeDice/UserThemedDie";

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
          geom={{}}
        />
      </Suspense>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
