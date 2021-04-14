import React from "react";
import { shallow } from "enzyme";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

let consoleSpy;

beforeEach(() => {
  // catch jest console error and dump into empty function.  Catches react-three physics console error.
  consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("ThreeDice Testing", () => {
  it("renders and matches snapshot", () => {
    expect(shallow(<ThreeDice />)).toMatchSnapshot();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });
});
