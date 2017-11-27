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

test('Multiple loads of a URL results in cached copy being returned', function(done) {
  var url = 'https://twitter.com/SenecaCollege/profile_image?size=original';

  // First load, shouldn't be cached.
  image.convert(url, function(err, a, cached) {
    expect(err).toBeFalsy();
    expect(a).toBeDefined();
    expect(cached).toBeFalsy();

    // Second load, should be cached.
    image.convert(url, function(err, a, cached) {
      expect(err).toBeFalsy();
      expect(a).toBeDefined();
      expect(cached).toBeTruthy();

      done();
    });
  });
});
