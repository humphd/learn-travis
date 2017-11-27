var redis = require('redis');
var client = redis.createClient();

var KEY_PREFIX = 'learntravis::';
var ONE_MINUTE = 1 * 60;
// Set cache time-to-live value, using environment variable or default of 1 min. 
var CACHE_TIMEOUT_SECONDS = process.env.CACHE_TIMEOUT_SECONDS || ONE_MINUTE;

// Namespace redis keys for our app
function prefixKey(key) {
  return KEY_PREFIX + key;
}

exports.set = function(key, val) {
  key = prefixKey(key);
  client.setex(key, CACHE_TIMEOUT_SECONDS, val);
};

exports.get = function(key, callback) {
  key = prefixKey(key);
  client.get(key, callback);
};
