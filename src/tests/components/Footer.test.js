import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe("Components/Footer Testing", () => {
  // Snapshot for header
  test("SNAPSHOT: Footer", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
