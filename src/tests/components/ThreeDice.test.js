import React from "react";
import { shallow } from "enzyme";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<ThreeDice />);
});

test("SNAPSHOT TEST THREEDICE", () => {
  expect(wrapper).toMatchSnapshot();
});
