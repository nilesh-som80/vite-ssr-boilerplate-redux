import {createStaticHandler ,createStaticRouter} from 'react-router-dom/server'
import { Routes } from './Routes';
function createFetchRequest(req) {
  let origin = `${req.protocol}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  req.on("close", () => controller.abort());

  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
const staticRouteGenerator = async (req)=>{
  let { query, dataRoutes } = createStaticHandler(Routes);
  let fetchRequest = createFetchRequest(req);
  let context = await query(fetchRequest);
  // If we got a redirect response, short circuit and let our Express server
  // handle that directly
  if (context instanceof Response) {
    throw context;
  }
  let router = createStaticRouter(dataRoutes,context)
  return {router,context};
}

export default staticRouteGenerator