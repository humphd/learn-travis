var imageToAscii = require('image-to-ascii');
var twitter = require('./twitter');
var cache = require('./cache');

/**
 * Convert an image path or url to a black-and-white ASCII image 30 high
 * @param {String} pathOrUrl a filesystem path or URL
 * @param {Function} callback (err, ascii)
 */
function convert(pathOrUrl, callback) {
  // https://github.com/IonicaBizau/image-to-ascii#imagetoasciisource-options-callback
  var options = {
    // Don't use ANSI colour codes in output
    colored: false,
    size: {
      // Force a height vs. using size of terminal
      height: 30
    }
  };

  cache.get(pathOrUrl, function(err, ascii) {
    if(err) {
      return callback(err);
    }

    // Cache hit, return it
    if(ascii) {
      return callback(null, ascii, /*cached=*/ true);
    }

    // Cache miss, go to network instead, then cache result
    try {
      imageToAscii(pathOrUrl, options, function(err, ascii) {
        if(err) {
          return callback(err);
        }
  
        cache.set(pathOrUrl, ascii);
        callback(null, ascii);
      });  
    } catch(e) {
      callback(e);
    }
  });
}

/**
 * Load's the profile pic for a given Twitter handle and converts it to ASCII
 * @param {String} twitterName a Twitter handle
 * @param {Function} callback (err, ascii) 
 */
function load(twitterName, callback) {
  var url = twitter.getProfileUrl(twitterName);
  convert(url, callback);
}

exports.load = load;
exports.convert = convert;