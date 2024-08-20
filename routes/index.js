var express = require('express');
const CarsModel = require('../models/CarsModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

// Home
router.get('/', async (req, res) => {
  var cars = await CarsModel.find();
  res.render('index', { cars: cars })
});

// Shop
router.get('/shop', async (req, res) => {
  var cars = await CarsModel.find();
  var lego = await LegoModel.find();
  const all = [...cars, ...lego];

  res.render('shop', { all: all })
});

// Shop Cars
router.get('/shop/cars', async (req, res) => {
  var cars = await CarsModel.find();
  res.render('shop', { all: cars });
});


//Shop Lego
router.get('/shop/lego', async (req, res) => {
  var lego = await LegoModel.find();
  res.render('shop', { all: lego });
});

//Sort
router.get('/shop/sort/price/asc', async (req, res) => {
  var cars = await CarsModel.find();
  var lego = await LegoModel.find();
  var all = [...cars, ...lego];

  all.sort((a, b) => a.price - b.price); 

  res.render('shop', { all: all });
});

router.get('/shop/sort/price/desc', async (req, res) => {
  var cars = await CarsModel.find();
  var lego = await LegoModel.find();
  var all = [...cars, ...lego,];

  all.sort((a, b) => b.price - a.price); 

  res.render('shop', { all: all });
});

// Search
router.post('/shop/search', async (req, res) => {
  var keyword = req.body.keyword;
  var cars = await CarsModel.find({ name: new RegExp(keyword, "i") });
  var lego = await LegoModel.find({ name: new RegExp(keyword, "i") });
  var all = [...cars, ...lego];

  res.render('shop', { all: all });
});

// detail
router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var car = await CarsModel.findById(id);
  var lego = await LegoModel.findById(id);
  if (car) {
    res.render('cars/detail', { car: car });
  } else if (lego) {
    res.render('lego/detail', { lego: lego });
  }else {
    res.redirect('/shop');
  }
});

// About
router.get('/contact', async (req, res) => {
  res.render('contact')
});

// Contact
router.get('/about', async (req, res) => {
  res.render('about')
});

module.exports = router;