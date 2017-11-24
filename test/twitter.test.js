var twitter = require('../src/twitter');

test('Only allow names 1-15 charcters long', function() {
  var name, i;

  // Falsy values should return null
  expect(twitter.getProfileUrl(undefined)).toBeNull();
  expect(twitter.getProfileUrl(null)).toBeNull();
  expect(twitter.getProfileUrl('')).toBeNull();

  // Try every length from 1-15
  for(i = 1; i < 16; i++) {
    name = 'a'.repeat(i);
    expect(twitter.getProfileUrl(name)).not.toBeNull();
  }

  // Confirm lengths beyond 15 fail
  for(i = 16; i < 50; i++) {
    name = 'a'.repeat(i);
    expect(twitter.getProfileUrl(name)).toBeNull();
  }
});

test('Only allow A-Z, a-Z, and _ characters', function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var underscore = '_';
  var valid = alphabet + alphabet.toUpperCase() + numbers + underscore;
  var invalid = '~ +-=[]{}!#$%^&*()?/,.';

  valid.split('').forEach(function(char) {
    expect(twitter.getProfileUrl(char)).not.toBeNull();
  });

  invalid.split('').forEach(function(char) {
    expect(twitter.getProfileUrl(char)).toBeNull();
  });
});

test('Passing a leading @ should be OK', function() {
  var nameWith = twitter.getProfileUrl('@name');
  var nameWithout = twitter.getProfileUrl('name');

  expect(nameWith).toEqual(nameWithout);    
});

test('URL should be correct format', function() {
  var name = 'Twitter';
  var url = 'https://twitter.com/' + name + '/profile_image?size=original';
  expect(twitter.getProfileUrl(name)).toEqual(url);
});
