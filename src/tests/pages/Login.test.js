import React from "react";
import { shallow } from "enzyme";
import { createBrowserHistory } from "history";
import Login from "../../pages/Login";

const newHistory = createBrowserHistory();

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login history={newHistory} />);
});

describe("Pages/Login Testing", () => {
  // Snapshot for Login
  test("SNAPSHOT: Login", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
