import React from "react";
import { shallow } from "enzyme";
import { Provider } from "jotai";

import GameManager from "../../components/ThreeDice/GameManager";

it("should do a snapshot test on GameManager", async () => {
  const wrapper = shallow(
    <Provider>
      <GameManager />
    </Provider>
  ).dive();
  expect(wrapper).toMatchSnapshot();
});
