// var assert = require('assert');
// var clients = require('restify-clients');
// const Place = require('../models/Place')
// const bodyParser = require('body-parser').json();


// var app = clients.createJsonClient({
//   url: 'http://localhost:3001',
//   version: '~1.0'
// });

// module.exports = function(req, res){
//   post('/places', bodyParser, function (err, req, res, obj) {
//     console.log(4, req.body)
//     return res.send(200)
//     // const newPlace = new Place(req.body)
//     // newPlace.save()
//     // .then(savedPlace => {
//     //   return res.send(savedPlace);
//     // })
//     // .catch(next);
//   });
// //   get('/places', function (err, req, res, obj) {
// //     console.log(3)
// //   assert.ifError(err);
// //   console.log('Server returned: %j', obj);
// // });

// }
// module.exports = app