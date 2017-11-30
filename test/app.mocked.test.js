// Tests against mocked Twitter.com API via nock

var nock = require('nock');
var path = require('path');
var app = require('../src/app');
var image = require('../src/image');
var request = require('supertest');
var cache = require('../src/cache');

describe('App tests mocked against Twitter URL API', function () {

  beforeEach(function(done) {
    cache._clear(done);
  });

  test('Server should provide ascii profile images', function(done) {
    var pathToTwitterJpg = path.join(__dirname, 'Twitter.jpg');

    // Mock a response for twitter.com/Twitter
    var twitter = nock('https://twitter.com')
      .get('/Twitter/profile_image?size=original')
      .replyWithFile(
        200,
        path.join(__dirname, 'Twitter.jpg'),
        { 'Content-Type': 'image/jpeg' }
      );

    image.convert(pathToTwitterJpg, function(err, a) {
      expect(err).toBeFalsy();
      expect(a).toBeDefined();
      
      request(app).get('/profile/Twitter').end(function(err, res) {
        expect(err).toBeFalsy();
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(a);

        twitter.done();
        done();
      });
    });
  });

  test('Server should respond with cached content on multiple hits', function(done) {
    var beebs = '/profile/@JustinBieber';
  
    // Mock a response for twitter.com/JustinBieber
    var twitter = nock('https://twitter.com')
      .get('/JustinBieber/profile_image?size=original')
      .replyWithFile(
        200,
        path.join(__dirname, 'JustinBieber.jpg'),
        { 'Content-Type': 'image/jpeg' }
      );

    request(app).get(beebs).end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(200);
  
      request(app).get(beebs).end(function(err, res) {
        expect(err).toBeFalsy();
        expect(res.status).toEqual(304);
      
        twitter.done();
        done();
      });
    });
  });

  test('Unknown profile name should result in 404', function(done) {
    var nobody = '/profile/CenecaSollege';

    // Mock a made-up profile name to simulate a bad request
    var twitter = nock('https://twitter.com')
      .get('/CenecaSollege/profile_image?size=original')
      .reply(404);

    request(app).get(nobody).end(function(err, res) {
      expect(err).toBeFalsy();
      expect(res.status).toEqual(404);

      twitter.done();
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
