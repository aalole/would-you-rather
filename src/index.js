import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';
import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import middleware from "./middlewares";

const store = createStore(rootReducer, middleware);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
