const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const people = require('../routes/people');
const req = chai.request(people);

module.exports = req;