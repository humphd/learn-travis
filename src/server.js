/* eslint-disable no-console */
var app = require('./app');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server started on http://localhost:' + port);
});
