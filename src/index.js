import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import "./index.css";

/* ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
); */

// use React experimental mode in order to use concurrent functionality for dice game
const rootEl = document.getElementById("root");
const root = ReactDOM.unstable_createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
