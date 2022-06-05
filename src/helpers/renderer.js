import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import routes  from '../client/routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="bundle.js"></script>
        </html>
    `

    return html;
}