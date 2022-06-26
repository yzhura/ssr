import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import routes from "../client/routes";
import { Provider } from "react-redux";
import serializeJavascript from "serialize-javascript";
import { renderRoutes } from "react-router-config";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const html = `
        <html>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serializeJavascript(
                      store.getState()
                    )}
                </script>
            </body>
            <script src="bundle.js"></script>
        </html>
    `;

  return html;
};
