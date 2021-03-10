import React from "react";
import { shallow } from "enzyme";
import Signup from "../../pages/Signup";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Signup />);
});

describe("Pages/Signup Testing", () => {
  // Snapshot for Signup
  test("SNAPSHOT: Signup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
