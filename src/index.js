import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
const AppVer= (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(AppVer, rootElement);
} else {
  render(AppVer, rootElement);
}

reportWebVitals();

