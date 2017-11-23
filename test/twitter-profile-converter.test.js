var twitterProfileConverter = require('../src');
var path = require('path');
var fs = require('fs');

test('@Twitter profile pic should match known version', function(done) {
  var pathToTwitterTxt = path.join(__dirname, 'Twitter.txt');

  fs.readFile(pathToTwitterTxt, 'utf8', function(err, data) {
    expect(err).not.toBeDefined;
    expect(data).toBeDefined;

    twitterProfileConverter.load('Twitter', function(err, ascii) {
      expect(err).not.toBeDefined;
      expect(ascii).toEqual(data);

      done();
    });
  });
});
