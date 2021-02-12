import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../../pages/LandingPage";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LandingPage />);
});

describe("Pages/LandingPage Testing", () => {
  // Snapshot for LandingPage
  test("SNAPSHOT: LandingPage", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
