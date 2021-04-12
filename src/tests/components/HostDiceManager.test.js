import React from "react";
import { shallow } from "enzyme";
import { Provider } from "jotai";

import HostDiceManager from "../../components/ThreeDice/HostDiceManager";

describe("ThreeDice/GameManager Testing", () => {
  it("should do a snapshot test on GameManager", async () => {
    const wrapper = shallow(
      <Provider>
        <HostDiceManager />
      </Provider>
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
