import React from "react";
import { shallow } from "enzyme";
import Header from "../../../components/Header";

// Snapshot for header
test("SNAPSHOT: Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
