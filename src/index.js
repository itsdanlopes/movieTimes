const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());
app.use(helmet());
app.use(compression());
app.use(routes);

app.get('/', (req, res) => res.sendfile("./views/index.html"));

app.listen(port, () => console.log('App running on port ', port));