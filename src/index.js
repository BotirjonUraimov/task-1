import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./components/root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
    <a href="#">Project sourse</a>
  </React.StrictMode>
);
