var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// all routes already start with /flights
/* GET flight listing. */
router.get('/', flightsCtrl.index);

module.exports = router;
