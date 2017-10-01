const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  nick: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, length: 2, required: true },
  zip: { type: Number, required: false },
  yearsThere: { type: String, required: false }
});

module.exports = mongoose.model('Places', placesSchema);
