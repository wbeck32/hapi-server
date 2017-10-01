module.exports = function(app) {
  const connect = require('../utils/connect');
  const connection = require('mongoose').connection;
  const Place = require('../models/Place')
  const bodyParser = require('body-parser').json();

	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
  });
  app.post('/', bodyParser, function(req, res, next) {
      console.log(14, req.body)
      new Place(req.body)
      .save()
      .then(savedPerson => {
        return res.send(savedPerson);
      })
      .catch(next);

  });

};





