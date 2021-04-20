/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent, screen } from "@testing-library/react";
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

  test("InfoCard inner button", () => {
    const mockCallBack = jest.fn();
    render(
      <InfoCard
        body="Body1"
        body2="Body2"
        buttonName="TestButton"
        buttonOnClick={mockCallBack}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockCallBack).toHaveBeenCalledTimes(0);
    expect(screen.getByText("TestButton")).toBeInTheDocument();

    fireEvent.click(screen.getByText("TestButton"));
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test("InfoCard inner button doesn't display if not defined", () => {
    render(<InfoCard body="Body1" body2="Body2" />);

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
