const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');

console.log('Loading Plant model...');
const Plant = require('./models/Plant');
console.log('Plant model loaded:', Plant);

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

app.post('/plants', async (req, res) => {
    const plant = new Plant(req.body);
    await plant.save();
    res.send(plant);
});

app.get('/plants', async (req, res) => {
    const plants = await Plant.find();
    res.send(plants);
});

app.get('/plants/:id', async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    res.send(plant);
});

app.put('/plants/:id', async (req, res) => {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(plant);
});

app.delete('/plants/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.send({ message: 'Plant deleted' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});