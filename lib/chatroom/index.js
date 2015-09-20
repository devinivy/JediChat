var socketio = require('socket.io');
var http = require('http');
var routes = require('./routes');

module.exports = function(app) {

  // Serve chatroom routes
  routes(app);

  // Setup socket listener
  var server = http.Server(app);
  var io = socketio(server);

  io.on('connection', function(socket) {

    console.log('Client connected');

    socket.on('message', function(message) {

        console.log('Received message:', message);
        socket.broadcast.emit('message', message);
    });
  });

  return server;
};
