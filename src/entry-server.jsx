import React from "react";
import ReactDOMServer from "react-dom/server";
import staticRouteGenerator from "./Router/StaticRoutes";
import { StaticRouterProvider } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "./store";

export async function render({ req }) {
  const { router, context } = await staticRouteGenerator(req);
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
          <StaticRouterProvider router={router} context={context} />
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
