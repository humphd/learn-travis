/* eslint-disable no-console */

var image = require('./image');
var express = require('express');
var app = express();

app.get('/profile/:twitterName', function(req, res) {
  var twitterName = req.params.twitterName;

  image.load(twitterName, function(err, ascii) {
    if(err) {
      console.error('Unable to load image:', err);
      res.status(500).send('Error processing request');
      return;
    }

    res.set('Content-Type', 'text/plain');
    res.send(ascii);
  });
});

module.exports = app;
