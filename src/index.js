import express from 'express';
import render from './helpers/renderer';

const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send(render());
})

app.listen(3000, () => {
    console.log('Listening');
})