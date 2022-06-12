import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import render from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(express.static('public'))
app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(routes, req.path).map(({route}) => {
        return route.loadData && route.loadData(store);
    });

    Promise.all(promises).then(() => {
        res.send(render(req, store));
    })

})


app.listen(3000, () => {
    console.log('Listening');
})