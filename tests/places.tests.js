const chai = require('chai');
const assert = chai.assert;
// const connect = require('../lib/utils/connect');
// const connection = require('mongoose').connection;
const req = require('superagent');
const { drop } = require('../lib/utils/db');
const placesData = require('./placesData');
const clients = require('restify-clients');

describe.skip('e2e places tests', () => {
  const client = clients.createJsonClient({
    url: 'http://localhost:3001',
    version: '~1.0'
  });

  let seededData = [];

  before(async () => {
    // await connect();
    await drop();
  });

  it('POST /', async (err, req, res, obj) => {
    const place = { "place": "little yellow house" };
    const savedPlace = await client.post('/').send(place)
    console.log(55, savedPlace)

  });
  it('GET /', async () => {
    const foundData = await req.get('/places');
    assert.lengthOf(foundData.body, 5);
    const lrc = await req.get('/places').query({
      likesRollerCoasters: true
    });
    assert.equal(lrc.body.length, 4);
    const homePortland = await req.get('/').query({
      home: 'portland'
    });
    assert.equal(homePortland.body.length, 1);
  });
  it('GET by /:id', async () => {
    const id = seededData[0]._id;
    const getOneById = await req.get(`/places/${id}`);
    assert(seededData[0].name, getOneById.body.name);
  }),
    it('PUT by /:id', async () => {
      const id = seededData[4]._id;
      const updatedUser = await req.put(`//${id}`).send({
        name: 'larry jones',
        likesRollerCoasters: true,
        heightInInches: 90
      });
      assert.equal(updatedUser.body.name, 'larry jones');
      assert.notEqual(
        updatedUser.body.likesRollerCoasters,
        seededData[2].likesRollerCoasters
      );
      const quirkId = seededData[3]._id;

      const updatedQuirk = await req.put(`/places/${quirkId}`).query({
        annoying: 'humming'
      });
      assert.equal(updatedQuirk.body.code, 400);
    }),
    it('DELETE by /:id', async () => {
      const getOne = await req.get('/places');
      const id = seededData[3]._id;
      const deleted = await req.delete(`/places/${id}`);
      assert.doesNotHaveAnyKeys(deleted.body);
      assert.isEmpty(deleted.body);
    });
});
