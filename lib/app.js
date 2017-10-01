const app = require('../server')
const bodyParser = require('body-parser').json();
const errorHandler = require('./utils/error-handler')();
const morgan = require('morgan');

// const app = clients.createJsonClient({
//   url: 'http://localhost:3001',
//   version: '~1.0'
// });

// app.use(morgan('dev'));
// app.use(bodyParser);

// const places = require('./routes/places');

// app.use('/places', places);

// app.use(errorHandler);

module.exports = app;
