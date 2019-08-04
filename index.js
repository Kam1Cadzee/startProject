const {startServer} = require('./src/server');
const {port} = require('./config');


/*
const wss = new WebSocket.Server({port: 8080});

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received message ' + message);
  });

  ws.send('HI!');
  console.log('Connect webSocket!')
  setTimeout(() => {
  ws.close();
  }, 2000)
});
*/

/*const wss = new WebSocket.Server({noServer: true});

function accept(req, res) {


  if(!req.headers.upgrade || req.headers.upgrade.toLowerCase() !== 'websocket') {
    res.end();
    return;
  }
  if(!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end();
    return;  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
  ws.on('message', message => {
    console.log(wss.clients);
    ws.send(`Your message ${message}, server message: HELLLO`);
  })
}
http.createServer(accept).listen(8080);*/

/*
let app = http.createServer();
let io = socket_io.listen(app);
app.listen(8080);

io.sockets.on('connection', socket => {
  console.log('connect');

  socket.on('eventServer', data => {
    console.log('data ' + data);
    socket.emit('eventClient', {data: 'Hello Client'});
  });
  socket.on('disconnect', () => {
    console.log('user disconneted')
  })
});
*/

startServer(port);

