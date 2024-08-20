var express = require('express');
const CarsModel = require('../models/CarsModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var cars = await CarsModel.find()
    res.render('cars/listcars', { cars: cars })
})

// Add
router.get('/create', async (req, res) => {
    var cars = await CarsModel.find();
    res.render('cars/carAdd', { cars: cars });
});

router.post('/create', async (req, res) => {
    var car = req.body
    await CarsModel.create(car)
        .then(console.log('create car successfully'))
        .catch(err => console.log('error creating car'))
    res.redirect('/cars')
});

// Edit
router.get('/update/:id', async (req, res) => {
    var id = req.params.id
    var car = await CarsModel.findById(id)
    res.render('cars/carEdit', { car: car })
})

router.post('/update/:id', async (req, res) => {
    const id = req.params.id
    var car = req.body

    await CarsModel.findByIdAndUpdate(id, car)
    console.log('update car successfully')
    res.redirect('/cars')
})

// Delete
router.get('/delete/:id', async (req, res) => {
    var id = req.params.id
    await CarsModel.findByIdAndDelete(id)
        .then(() => console.log('delete successful'))
        .catch(err => console.log(err))
    res.redirect('/cars')
})

module.exports = router;