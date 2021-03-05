import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);