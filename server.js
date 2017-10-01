var restify = require('restify');
var app = restify.createServer({name:'REST-api'});

app.use(restify.plugins.acceptParser(app.acceptable));
// app.use(restify.plugins.bodyParser());
app.use(restify.plugins.queryParser());

app.listen(3001, function() {
  console.log('server listening on port number', 3001);

});
const routes = require('./lib/routes/places')(app);