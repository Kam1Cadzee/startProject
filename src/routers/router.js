const express = require('express');
const mainRoute = require('./main/main');
const usersRouter = require('./user/index');
const getSaveImageHandler = require('./image/saveImage');
const apiRoutes = express.Router();




apiRoutes
    .use('/', (req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
          res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

          //intercepts OPTIONS method
          if ('OPTIONS' === req.method) {
                //respond with 200
                res.send(200);
          }
          else {
                //move on
                next();
          }
    })
    .get('/', mainRoute)
    .use('/users', usersRouter)
    .post('/image', getSaveImageHandler())

    .get('*', (req, res, next) => {
      res.status(404).send('Route not exists');
});

module.exports = apiRoutes;

