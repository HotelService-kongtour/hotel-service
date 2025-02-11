import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./createGlobalStyle";
import { ColorProvider } from "./context/ColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ColorProvider>
    <GlobalStyle />
    <App />
  </ColorProvider>
  // </React.StrictMode>
);

reportWebVitals();
