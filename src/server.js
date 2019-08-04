const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = require('./modules/app');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
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
  server.listen(8080);
  console.log('Server was started at http://localhost:' + port);
};

io.on('connection', socket => {
  console.log('default connect');

  socket.emit('news', {hello: 'simple connect'});
  socket.on('eventServer', data => {
    console.log(data);
  })


});

const chat = io
  .of('/chat')
  .on('connection', socket => {
    console.log('connect to chat');
    socket.emit('a message', {
      that: 'only',
      '/chat': 'will get'
    });
    chat.emit('a message', {
      everyone: 'in',
      '/chat': 'will get'
    })
    socket.on('ferret', (name, word, other, fn) => {
      fn(name + ' says ' + word + other);
    })
    setInterval(() => {
      chat.emit('current date', {date: new Date().toTimeString()});
    }, 1000);
  });

const news = io
  .of('/news')
  .on('connection', socket => {
    socket.emit('item', {news: 'item'})
  });
exports.startServer = startServer;
