import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Downloaded packages:
// + axios@0.21.1
// + redux-thunk@2.3.0
// + react-redux@7.2.4
// + react-router-dom@5.2.0
// + redux@4.1.1
// + redux-logger@3.0.6
// + redux-middleware@0.1.21
