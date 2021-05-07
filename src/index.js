import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./redux/store";
import Pages from "./pages/Pages";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <BrowserRouter>
        <Provider store={store}>
          <Pages />
        </Provider>
      </BrowserRouter>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
