/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import InfoCard from "../../components/InfoCard";

let wrapper;

beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

describe("Components/InfoCard Testing", () => {
  // Snapshot for InfoCard
  test("SNAPSHOT: InfoCard", () => {
    wrapper = shallow(<InfoCard />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Test clickHandler event", () => {
    wrapper = shallow(<InfoCard clickHander={jest.fn()} />);
    wrapper.find("button").simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});
