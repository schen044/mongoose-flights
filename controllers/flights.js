const Flight = require('../models/flight');

// export
module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        // render the flight index page, pass in flight object
        res.render('flight/index', {
            flights
        })
    })
}