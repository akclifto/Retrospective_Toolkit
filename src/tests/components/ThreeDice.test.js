/* eslint no-unused-vars: 0 */
import React from "react";
import { shallow } from "enzyme";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

describe("rendering components", () => {
  it("renders ThreeDice without crashing", () => {
    shallow(<ThreeDice />);
  });
});
