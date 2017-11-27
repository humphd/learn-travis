/* https://eslint.org/docs/rules/no-console#when-not-to-use-it */
/* eslint-disable no-console */

var image = require('../src/image');

// Expect a Twitter username as the second arg:
// node index.js <twitter-name>
var args = process.argv.slice(2);
var twitterName = args[0];

if(!twitterName) {
  console.error('Expected Twitter username as only argument.');
  process.exit(1);
}

image.load(twitterName, function(err, ascii) {
  if(err) {
    console.error('Unable to load profile image:', twitterName);
    process.exit(1);
  }

  console.log(ascii);
  process.exit(0);
});
