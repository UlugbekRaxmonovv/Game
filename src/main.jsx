


import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/darkMode/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextProvider>
);
