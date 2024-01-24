import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./Router/Routes";
import { Provider } from "react-redux";
import store from "./store";
const BrowserRouter = createBrowserRouter(Routes);
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={BrowserRouter} />
    </Provider>
  </React.StrictMode>
);
