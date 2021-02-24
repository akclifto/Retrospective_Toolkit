import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/routes";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    // eslint-disable-next-line global-require
    require("../../index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Router>
        <Routes />
      </Router>,
      div
    );
  });
});
