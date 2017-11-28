var redis = require('redis');
var client = redis.createClient();

// Namespace for all redis keys in the cache
var KEY_PREFIX = 'learntravis:';
// Set cache time-to-live value, using environment variable or default of 1 min. 
var ONE_MINUTE = 1 * 60;
var CACHE_TIMEOUT_SECONDS = process.env.CACHE_TIMEOUT_SECONDS || ONE_MINUTE;

// Rewrite keys to include our app's namespace for redis
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

// For testing, a way to clear all keys from the cache
exports._clear = function(callback) {
  client.keys(KEY_PREFIX + '*', function(err, keys) {
    if(err) {
      return callback(err);
    }

    keys.forEach(function(key) {
      client.del(key);
    });

    callback(null);
  });
};
