var express = require('express');
var router = express.Router();

/* GET product listing. */
router.get('/', function(req, res, next) {
  res.send('Product list');
});

module.exports = router;
