var image = require('./image');
var twitter = require('./twitter');

var version = require('version-healthcheck');
var express = require('express');
var app = express();

// Provide a basic healthcheck route, see https://www.npmjs.com/package/version-healthcheck
app.get('/healthcheck', version);

app.get('/profile/:twitterName', function(req, res) {
  // Get the Twitter profile name off the URL and validate it 
  var twitterName = req.params.twitterName;
  if(!twitter.isValidName(twitterName)) {
    return res.status(400).send('Invalid profile name.');
  }

  // Try loading the given Twitter user's profile image and converting
  // to ASCII.  If we can't find this user, return a 404.  Otherwise,
  // return plain text ASCII of the image, preferring cached content
  // if available.
  image.load(twitterName, function(err, ascii, cached) {
    if(err) {
      res.status(404).send('Unable to load profile image.');
      return;
    }

    // Return plain text (vs. html, image, etc)
    res.set('Content-Type', 'text/plain');
    // Indicate whether we got this out of cache or had to hit the network
    if(cached) {
      res.status(304);
    } else {
      res.status(200);
    }
    // Finally, send the body of the response: the image ASCII
    res.send(ascii);
  });
});

// Make it easier to test by separating our web app logic from the server code.
module.exports = app;
