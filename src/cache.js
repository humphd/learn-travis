/* eslint-disable no-console */

var redis = require('redis');
var client = redis.createClient();

var KEY_PREFIX = 'learntravis:';
var KEY_TIMEOUT_SECONDS = 15;

client.on('error', function(err) {
  console.error('Redis Client Error', err);
});

function prefixKey(key) {
  return KEY_PREFIX + key;
}

exports.set = function(key, val) {
  key = prefixKey(key);
  client.setex(key, KEY_TIMEOUT_SECONDS, val);
};

exports.get = function(key, callback) {
  key = prefixKey(key);
  client.get(key, callback);
};
