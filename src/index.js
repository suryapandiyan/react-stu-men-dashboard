import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import $ from "jquery";
// import Popper from "popper.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);