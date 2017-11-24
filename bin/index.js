/* https://eslint.org/docs/rules/no-console#when-not-to-use-it */
/* eslint no-console:0 */

var twitterProfileConverter = require('../src/image');

// Expect a Twitter username as the second arg:
// node index.js <twitter-name>
var args = process.argv.slice(2);
var twitterName = args[0];

if(!twitterName) {
  console.error('Expected Twitter username as argument');
  process.exit(1);
}

twitterProfileConverter.load(twitterName, function(err, ascii) {
    if(err) {
        console.error('Unable to load profile image:', twitterName);
        process.exit(1);
    }

    console.log(ascii);
});
