import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import { StatusModalsProvider } from "./context/StatusModalsContext";


ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <StatusModalsProvider>
      <App />
      </StatusModalsProvider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);