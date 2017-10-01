const Person = require('../models/Person');
const bodyParser = require('body-parser').json();
const req = require('../utils/request');

module.exports = function people() {
  post = ('/', req, next => {
    return res.send(200)
    console.log(99, 'in post');

  })
}
