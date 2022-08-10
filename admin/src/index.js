import React from "react";
//import ReactDOM from 'react-dom';
import Store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
);

