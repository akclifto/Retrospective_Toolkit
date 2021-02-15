import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe("Components/Header Testing", () => {
  // Snapshot for header
  test("SNAPSHOT: Header", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
