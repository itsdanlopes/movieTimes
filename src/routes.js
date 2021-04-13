const {
    Router
} = require('express');

const controller = require('./controllers/controller');

const routes = Router();

routes.get('/getMovie', (req, res) => controller.getMovie()
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.post('/createMovie', (req, res) => controller.createMovie(req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.put('/updateMovie/:id', (req, res) => controller.updateMovie(req.params, req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.delete('/deleteMovie/:id', (req, res) => controller.deleteMovie(req.params)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.get('/getSingleMovie/:id', (req, res) => controller.getSingleMovie(req.params)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

module.exports = routes;