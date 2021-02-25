/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import InfoCard from "../../components/InfoCard";

let wrapper;

beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
  wrapper = shallow(<InfoCard />);
});

describe("Components/InfoCard Testing", () => {
  // Snapshot for InfoCard
  test("SNAPSHOT: InfoCard", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
