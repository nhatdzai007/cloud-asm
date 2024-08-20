var mongoose = require('mongoose');
var CarsSchema = mongoose.Schema({
    name: String,
    brand: String,
    image: String,
    color: String,
    detail: String,
    battery: Boolean,
    quantity: Number,
    price: Number
})

var CarsModel = mongoose.model('toys cars', CarsSchema, 'cars')
module.exports = CarsModel