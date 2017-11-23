var imageToAscii = require('image-to-ascii');

// From https://gist.github.com/jcsrb/1081548#gistcomment-1493078
function getTwitterProfileUrl(twitterName) {
  return "https://twitter.com/" + twitterName + "/profile_image?size=original";
}

function load(twitterName, callback) {
  var url = getTwitterProfileUrl(twitterName);

  // https://github.com/IonicaBizau/image-to-ascii#imagetoasciisource-options-callback
  var options = {
    // Don't use ANSI colour codes in output
    colored: false,
    size: {
      // Force a height vs. using size of terminal
      height: 30
    }
  };

  imageToAscii(url, options, callback);
}

exports.load = load;
