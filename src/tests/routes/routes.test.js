/* eslint-disable no-console */
import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { install } from "resize-observer";
import AuthLandingPage from "../../pages/AuthLandingPage";
import LandingPage from "../../pages/LandingPage";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";
import Signup from "../../pages/Signup";
import Testing from "../../pages/Testing";
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
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(1);
  });

  test("Validate PageNotFound redirect false, validate LandingPage", () => {
    // jest throws an error for react.jsx on ThreeDice because of react-three-fiber.
    // it doesn't cause the test to fail, but fills the test screen
    // with a bunch of red text.  This jest.fn() catches it.
    console.error = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
    // console.log("mockedError_landing", console.error);
    expect(console.error).toHaveBeenCalledTimes(1);

    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });

  test("Validate AuthLandingPage, Auth FALSE", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(AuthLandingPage)).not.toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });

  // Unsure how to test ifAuth method route
  // Commenting out this test until I figure out how to validate it correctly
  // test('Validate AuthLandingPage, Auth TRUE', () => {

  //     const wrapper = mount(
  //         <MemoryRouter initialEntries = { [ '/admin'] } >
  //         <Routes />
  //         </MemoryRouter>
  //         );

  //     expect (wrapper.find(LandingPage)).toHaveLength(0);
  //     expect (wrapper.find(AuthLandingPage)).toHaveLength(1);
  //     expect (wrapper.find(Login)).toHaveLength(0);
  //     expect (wrapper.find(Signup)).toHaveLength(0);

  //     expect (wrapper.find(PageNotFound)).toHaveLength(0);

  // });

  test("Validate Login Page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });

  test("Validate Signup Page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(1);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });

  test("Validate Testing Page", () => {
    // jest throws an error mapping not having unique ids.
    // it doesn't cause the test to fail, but fills the test screen
    // with a bunch of red text.  This jest.fn() catches it.
    // console.error = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={["/testing"]}>
        <Routes />
      </MemoryRouter>
    );
    // console.log("mockedError_testing", console.error);
    // expect(console.error).toHaveBeenCalledTimes(1);

    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(Testing)).toHaveLength(1);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });
});
