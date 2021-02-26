/* eslint no-unused-vars: 0 */
import React from "react";
import renderer from "react-test-renderer";
import { install } from "resize-observer";
import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";
import {
  render,
  getByText,
  getByLabelText,
  screen,
} from "@testing-library/react";
import ThreeDice from "../../components/ThreeDice/ThreeDice";

beforeAll(() => {
  if (!window.ResizeObserver) install();
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  // jest.spyOn(console, "log").mockImplementation(() => {});
});

test("SNAPSHOT TEST THREEDICE", () => {
  const testRenderer = renderer.create(<ThreeDice />);

  expect(testRenderer.toTree()).toMatchSnapshot();
});

test("Custom Button and Loading Html elements are loading", () => {
  expect(screen.getByText("roll")).toBe(true);
  expect(getByText.contains("Button")).toBe(true);
  expect(getByText.contains("Html")).toBe(true);
});
