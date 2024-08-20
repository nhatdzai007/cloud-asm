var mongoose = require('mongoose');
var LegoSchema = mongoose.Schema({
    name: String,
    brand: String,
    material: String,
    detail: String,
    year: Number,
    image: String,
    quantity: Number,
    price: Number,
})

var LegoModel = mongoose.model('toys lego', LegoSchema, 'lego')
module.exports = LegoModel