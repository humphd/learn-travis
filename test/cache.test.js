var cache = require('../src/cache');

test('Can set and get values from cache', function(done) {
  var now = Date.now();
  var key = 'key-' + now;
  var value = 'value-' + now;

  cache.set(key, value);
  cache.get(key, function(err, result) {
    expect(err).toBeFalsy();
    expect(result).toEqual(value);

    done();
  });
});

test('_clear should remove all keys from cache', function(done) {
  var now = Date.now();
  var key = 'key2-' + now;
  var value = 'value2-' + now;

  cache.set(key, value);
  cache._clear(function(err) {
    expect(err).toBeFalsy();
    expect(cache.get(key)).not.toBeDefined();

    done();
  });
});
