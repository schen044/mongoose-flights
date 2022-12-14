const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

// export
module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        // render the flight index page, pass in flight object
        res.render('flights/index', {
            title: 'All Flights',
            flights
        })
    })
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight'
    });
}

function create(req, res) {
    console.log(req.body);
    // create object to be saved
    const flight = new Flight(req.body);
    // save object to db
    flight.save(function(err) {
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id})
        .populate('flight').then(function(tickets) {
            res.render('flights/show', { 
                title: 'Flight Info', flight, tickets
            })
        })
    })
}

// async await version of above
async function showOne(req, res) {
    let flight = await Flight.findById(req.params.id);
    let tickets = await Ticket.find({flight: flight._id})
        .populate('flight');
    res.render('flights/show',  { 
        title: 'Flight Info', flight, tickets
    })
}