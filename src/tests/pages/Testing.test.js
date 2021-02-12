import React from "react";
import { shallow } from "enzyme";
import Testing from "../../pages/Testing";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Testing />);
});

describe("Pages/Testing", () => {
  // Snapshot for Testing
  test("SNAPSHOT: Testing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
