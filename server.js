var restify = require('restify');
const Place = require('./lib/models/Place');
const bodyParser = require('body-parser').json();

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0',
  url: 'http://127.0.0.1'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());
server.use(bodyParser);


server.listen(3001, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.post('/places', bodyParser, (req, res, next) => {
    console.log(5888, req.body)

    new Place(req.body)
    .save()
    .then(results => {
        console.log(99, results);
        return res.send(results);
        // return next();
    })
    return next();

}),
  server.get('/places', function(req, res, next) {
    console.log(77, req)
    // res.send(req);
    return next();
  });

