/* eslint no-console: "off" */
const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/restify');
var db = mongoose.connection;

db.on('error', function () {
	console.log('error occured from db');
});

db.once('open', function dbOpen() {
	console.log('successfully opened the db');
});

exports.mongoose = mongoose;




// module.exports = function (dbUri=process.env.MONGODB_URI || 'mongodb://localhost:27017/restify') {
//     const promise = mongoose.connect(dbUri).then(() => mongoose.connection);

//     mongoose.connection.on('connected', function () {
//         console.log('Mongoose default connection open to ' + dbUri);
//     });

//     mongoose.connection.on('error', function (err) {
//         console.log('Mongoose default connection error: ' + err);
//     });

//     mongoose.connection.on('disconnected', function () {
//         console.log('Mongoose default connection disconnected');
//     });

//     process.on('SIGINT', function () {
//         mongoose.connection.close(function () {
//             console.log('Mongoose default connection disconnected through app termination');
//             process.exit(0);
//         });
//     });

//     return promise;
// };

