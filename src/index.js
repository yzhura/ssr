import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import routes from "./client/routes";
import render from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData && route.loadData(store);
    })
    .filter((promise) => promise && promise)
    .map(
      (promise) =>
        new Promise((res) => {
          promise.finally(res);
        })
    );

  Promise.all(promises).then(() => {
    const context = {};
    const content = render(req, store, context);

    if(context.url) {
        return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening");
});
