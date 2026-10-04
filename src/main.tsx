import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initSeo } from "./lib/seo";
import "./index.css";

initSeo();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
