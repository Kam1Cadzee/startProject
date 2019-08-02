const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = require('./modules/app');
const morgan = require('morgan');
const router = require('./routers/router');

const errorHandler = (err, req, res, next) => {
  res
      .status(500)
      .send('Error found: ' + err.stack);
};

const staticPath = path.join(__dirname, 'static');
const startServer = port => {
  app
      .use(bodyParser.urlencoded({extended: false}))
      .use(bodyParser.json())
      .use(morgan('dev'))
      .use('static', express.static(staticPath))
      .use('/', router)
      .use(errorHandler);

  app.listen(port);
  console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
