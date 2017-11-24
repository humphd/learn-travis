var app = require('../src/app');
var path = require('path');
var image = require('../src/image');
var request = require('supertest');

test('Server should provide ascii profile images', function(done) {
  var pathToTwitterJpg = path.join(__dirname, 'Twitter.jpg');
    
  image.convert(pathToTwitterJpg, function(err, a) {
    expect(err).toBeFalsy();
    expect(a).toBeDefined();
    
    request(app).get('/profile/Twitter').end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(200);
      expect(res.text).toEqual(a);
      done();
    });
  });
});
