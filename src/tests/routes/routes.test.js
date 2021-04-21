import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { install } from "resize-observer";
import LandingPage from "../../pages/LandingPage";
import PageNotFound from "../../pages/PageNotFound";
import Routes from "../../routes/routes";

beforeAll(() => {
  // React-three-fiber rendering on landing page throws error about
  // resizeObserver.  This fixes it.
  if (!window.ResizeObserver) install();
});

describe("Routes/routes Testing", () => {
  test("SNAPSHOT: Routes", () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Validate PageNotFound redirect true to 404 page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/badURL"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(1);
  });

  test("Validate LandingPage", () => {
    // jest throws an error for react.jsx on ThreeDice because of react-three-fiber.
    // it doesn't cause the test to fail, but fills the test screen
    // with a bunch of red text.  This jest.fn() catches it.
    console.error = jest.fn();
    console.log = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
    // console.log("mockedError_landing", console.error);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(wrapper.find(LandingPage)).toBeDefined();
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });
});
