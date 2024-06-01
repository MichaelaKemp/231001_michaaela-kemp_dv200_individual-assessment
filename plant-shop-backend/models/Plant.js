const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    watering: { type: String, required: true },
    temperature: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
