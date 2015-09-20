var express = require('express');

module.exports = function(app) {
  
  // Serve static files
  app.use(express.static(__dirname + '/public'));
};
