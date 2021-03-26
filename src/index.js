import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundry>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundry>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
