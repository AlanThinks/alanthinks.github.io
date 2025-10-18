import React from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./router";
import "./styles/legacy.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root not found");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

