import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import "./index.css";
// initial page checks to see if user is logged in
// if logged in, send to the app
// otherwise, send to sign in page

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
