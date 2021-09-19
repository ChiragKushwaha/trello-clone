import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import Store from "./store";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
