var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// all routes already start with /flights
// GET /flights index
router.get('/', flightsCtrl.index);
// GET /flights/new new
router.get('/new', flightsCtrl.new);
module.exports = router;
