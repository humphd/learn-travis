var image = require('../src/image');
var path = require('path');

test('@Twitter profile pic should match known version', function(done) {
  var pathToTwitterJpg = path.join(__dirname, 'Twitter.jpg');

  image.convert(pathToTwitterJpg, function(err, a) {
    expect(err).toBeFalsy();
    expect(a).toBeDefined();

    image.load('Twitter', function(err, b) {
      expect(err).toBeFalsy();
      expect(b).toEqual(a);

      done();
    });
  });
});
