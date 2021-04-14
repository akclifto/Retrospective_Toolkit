import React from "react";
import { shallow } from "enzyme";
import { Provider } from "jotai";

import HostThemedDie from "../../components/ThreeDice/HostThemedDie";

describe("ThreeDice/GameManager Testing", () => {
  it("should do a snapshot test on GameManager", async () => {
    const wrapper = shallow(
      <Provider>
        <HostThemedDie />
      </Provider>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
