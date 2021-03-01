/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import { screen, fireEvent, cleanup } from "@testing-library/react";
import InfoCard from "../../components/InfoCard";

let wrapper;

beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
  wrapper = shallow(<InfoCard />);
});

afterEach(() => {
  cleanup();
});

describe("Components/InfoCard Testing", () => {
  // Snapshot for InfoCard
  test("SNAPSHOT: InfoCard", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("InfoButton returns button text on click", (done) => {
    wrapper.setProps({});
    const card = screen.getByText("root");
    console.log(card);
    fireEvent.click(card);
    console.log(card);
    // const result = wrapper.find("root").simulate("click");
    // console.log("result", result);
    done();
  });
});
