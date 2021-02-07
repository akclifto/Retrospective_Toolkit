import React from "react";
import ReactDOM from "react-dom";
import Routes from "../routes/routes";
import "../index.css";

jest.mock("react-dom", () => ({ render: jest.fn() }));

it("Verify Index Page Renders and Does Not Crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Routes />, div);
  global.document.getElementById = (id) => id === "root" && div;
  expect(ReactDOM.render).toHaveBeenCalledWith(1);
});
