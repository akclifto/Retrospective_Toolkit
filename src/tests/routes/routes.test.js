import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { install } from "resize-observer";
import LandingPage from "../../pages/LandingPage";
import AuthLandingPage from "../../pages/AuthLandingPage";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
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
    expect(wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Signup)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(1);
  });

  // TODO: validate PageNotFound redirect false, also validate LandingPage
  test("Validate PageNotFound redirect false, validate LandingPage", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

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
});
