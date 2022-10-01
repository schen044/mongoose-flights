const Flight = require('../models/flight');

// export
module.exports = {
    index,
    new: newFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        // render the flight index page, pass in flight object
        res.render('flights/index', {
            flights
        })
    })
}

function newFlight(req, res) {
    res.render('flights/new');
}