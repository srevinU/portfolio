import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Background from "./components/Background";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
    <Background />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
