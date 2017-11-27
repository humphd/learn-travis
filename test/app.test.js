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

test('Server should respond with cached content on multiple hits', function(done) {
  var beebs = '/profile/@justinbieber';

  request(app).get(beebs).end(function(err, res) {
    expect(err).toBeFalsy();
    expect(res.status).toEqual(200);

    request(app).get(beebs).end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(304);
    
      done();
    });
  });
});

test('Unknown profile name should result in 404', function(done) {
  var nobody = '/profile/NotSenecaCollege';
    
  request(app).get(nobody).end(function(err, res) {
    expect(err).toBeFalsy();
    expect(res.status).toEqual(404);
    done();
  });
});
