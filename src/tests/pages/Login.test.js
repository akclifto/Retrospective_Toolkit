import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Login from "../../pages/Login";
import loginController from "../../controller/login";

// Mock implementation from controller/login.js
jest.mock("../../controller/login");

const newHistory = createBrowserHistory();

let wrapper;

afterEach(() => {
  cleanup();
});

describe("Pages/Login Testing", () => {
  // Snapshot for Login
  test("SNAPSHOT: Login", () => {
    wrapper = shallow(<Login history={newHistory} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Text Fields and button update properly", async () => {
    // Mock the expected value the button should receive.
    loginController.mockResolvedValueOnce(true);

    // A regular router/BrowserRouter here does not work due to how the Login.jsx has links inside of it. It is strange.
    render(
      <MemoryRouter>
        <Login history={newHistory} />
      </MemoryRouter>
    );

    // Find the TextFields and button for loggin in
    const passwordField = screen.getByLabelText(/Password/);
    const emailField = screen.getByLabelText(/Email/);
    const button = screen.getByRole("button");

    fireEvent.change(emailField, { target: { value: "admin@admin.com" } });
    expect(emailField.value).toBe("admin@admin.com");

    fireEvent.change(passwordField, { target: { value: "sfadmin" } });
    expect(passwordField.value).toBe("sfadmin");

    fireEvent.click(button);
    expect(loginController).toHaveBeenCalledTimes(1);
  });

  test("Button works properly on incorrect data", async () => {
    // Mock an incorrect username/password
    loginController.mockResolvedValueOnce(false);

    render(
      <MemoryRouter>
        <Login history={newHistory} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(loginController).toBeCalledTimes(2);
  });
});
