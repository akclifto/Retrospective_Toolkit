import React from "react";
import { shallow } from "enzyme";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

describe("rendering components", () => {
  it("renders and matches snapshot", () => {
    expect(shallow(<ThreeDice />)).toMatchSnapshot();
  });
});
