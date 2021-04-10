const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(cors);

app.get('/', (req, res) => res.json('Healthy check ok'));

app.listen(port, () => console.log('App running on port ', port));