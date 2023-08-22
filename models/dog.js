const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    Name: { type: String, required: true},
    Age: {type: Number, required: true},
    Description: {type: String, required: true},
    Breed: {type: String, required: true}
});

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog;