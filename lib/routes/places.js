var assert = require('assert');
var clients = require('restify-clients');

var app = clients.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});

module.exports = function(req, res){
  get('/places', function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Server returned: %j', obj);
});
}
module.exports = app