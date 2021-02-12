import React from "react";
import { shallow } from "enzyme";
import Login from "../../pages/Login";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

describe("Pages/Login Testing", () => {
  // Snapshot for Login
  test("SNAPSHOT: Login", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
