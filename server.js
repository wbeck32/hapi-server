/* eslint no-console: "off" */
const Hapi = require('hapi');
const server = new Hapi.Server();
const app = require('./lib/app')
const people = require('./lib/routes/people');

server.connection({ port: 3001, host: 'localhost' });
server.route({ method: '*', path: '/people', handler: people });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
console.log(11, server)

