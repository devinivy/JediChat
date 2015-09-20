var express = require('express');
var app = express();
var routes = require('./lib/routes')
var chatroom = require('./lib/chatroom')

// Add routes to our app
routes(app);

// Setup chatroom routes/listeners
var server = chatroom(app);

server.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
