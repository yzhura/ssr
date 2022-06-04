import 'babel-polyfill';
import express from 'express';
import render from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'))
app.get('*', (req, res) => {
    const store = createStore();

    // Logic to inizialize and load data to store

    res.send(render(req, store));
})

app.listen(3000, () => {
    console.log('Listening');
})