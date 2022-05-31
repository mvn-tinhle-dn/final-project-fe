import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global/_global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { Spin } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
const rootNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spin />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
