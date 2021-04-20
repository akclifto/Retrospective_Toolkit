import React from "react";
import { shallow } from "enzyme";
import DiceLanding from "../../containers/DiceLanding";

describe("Container/DiceLanding Testing", () => {
  // Snapshot for LandingPage
  test("SNAPSHOT: diceLanding", () => {
    const wrapper = shallow(<DiceLanding />);
    expect(wrapper).toMatchSnapshot();
  });
});