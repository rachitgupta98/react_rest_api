const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//geo location schema

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//ninja schema and model
const ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});
const Ninja = mongoose.model("ninja", ninjaSchema);
module.exports = Ninja;
