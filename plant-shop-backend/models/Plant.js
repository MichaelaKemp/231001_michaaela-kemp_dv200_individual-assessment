const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  watering: String,
  height: Number,
  temperature: Number,
  description: String,
  price: Number,
  image: String,
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;