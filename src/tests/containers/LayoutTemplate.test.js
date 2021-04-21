import React from "react";
import { shallow } from "enzyme";
import LayoutTemplate from "../../containers/LayoutTemplate";

describe("Container/DiceLanding Testing", () => {
  // Snapshot for LandingPage
  test("SNAPSHOT: diceLanding", () => {
    const wrapper = shallow(<LayoutTemplate/>);
    expect(wrapper).toMatchSnapshot();
  });
});