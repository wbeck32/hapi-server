const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  nick: { type: String},
  streetAddress: { type: String},
  city: { type: String},
  state: { type: String},
  zip: { type: Number},
  yearsThere: { type: String }
});

module.exports = mongoose.model('Place', placesSchema);