var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restify');
var db = mongoose.connection;

db.on('error', function () {
	console.log('error occured from db');
});

db.once('open', function dbOpen() {
	console.log('successfully opened the db');
});

exports.mongoose = mongoose;