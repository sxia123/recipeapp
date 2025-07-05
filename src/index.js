import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ make sure this is included

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
