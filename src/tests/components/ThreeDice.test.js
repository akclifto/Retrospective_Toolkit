/* eslint no-unused-vars: 0 */
import React from "react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<ThreeDice />);
});

test("SNAPSHOT TEST THREEDICE", () => {
  expect(wrapper).toMatchSnapshot();
  const testRenderer = TestRenderer.create(<ThreeDice />);
});
