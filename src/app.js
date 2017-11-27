/* eslint-disable no-console */

var image = require('./image');
var express = require('express');
var app = express();

app.get('/profile/:twitterName', function(req, res) {
  var twitterName = req.params.twitterName;

  image.load(twitterName, function(err, ascii, cached) {
    if(err) {
      res.status(404).send('Unable to lod profile image.');
      return;
    }

    res.set('Content-Type', 'text/plain');
    if(cached) {
      res.status(304);
    } else {
      res.status(200);
    }
    res.send(ascii);
  });
});

module.exports = app;
