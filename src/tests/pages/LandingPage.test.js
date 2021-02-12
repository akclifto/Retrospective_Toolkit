/* eslint-disable no-unused-vars */
import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../../pages/LandingPage";

let wrapper;

beforeAll(() => {
  // can't render the page bc of react-three/cannon module not found
  const mockCannon = jest.genMockFromModule("@react-three/cannon");
  jest.mock("@react-three/cannon", () => mockCannon);
});

beforeEach(() => {
  wrapper = shallow(<LandingPage />);
});

describe("Pages/LandingPage Testing", () => {
  // Snapshot for LandingPage
  test("SNAPSHOT: LandingPage", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
