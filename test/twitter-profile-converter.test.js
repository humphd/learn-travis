var twitterProfileConverter = require('../src');
var path = require('path');

test('@Twitter profile pic should match known version', function(done) {
  var pathToTwitterJpg = path.join(__dirname, 'Twitter.jpg');

  twitterProfileConverter.convert(pathToTwitterJpg, function(err, a) {
    expect(err).not.toBeDefined;
    expect(a).toBeDefined;

    twitterProfileConverter.load('Twitter', function(err, b) {
      expect(err).not.toBeDefined;
      expect(b).toEqual(a);

      done();
    });
  });
});
