const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(cors());
app.use(compression());
app.use(helmet());

app.get('/', (req, res) => res.json('Healthy check ok'));

app.listen(port, () => console.log('App running on port ', port));