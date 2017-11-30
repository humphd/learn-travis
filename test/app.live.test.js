// Tests against live Twitter.com API

var app = require('../src/app');
var path = require('path');
var image = require('../src/image');
var request = require('supertest');
var cache = require('../src/cache');

describe('App tests against live Twitter URL API', function () {

  beforeEach(function(done) {
    cache._clear(done);
  });
  
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
    var beebs = '/profile/@JustinBieber';

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
    var nobody = '/profile/CenecaSollege';
      
    request(app).get(nobody).end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(404);
      done();
    });
  });

  test('Invalid profile name should result in 400', function(done) {
    var nobody = '/profile/NameIsTooLongForTwitter';
      
    request(app).get(nobody).end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(400);
      done();
    });
  });

});
