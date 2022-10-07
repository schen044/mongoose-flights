const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('tickets/new', {
          title: 'Add Ticket',
          tickets,
          flight
        })
    })
  });
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, movie) {
      req.body.flight = req.params.id
      console.log(req.body);
      let ticket = new Ticket(req.body);
      ticket.save(function(err) {
        if (err) return res.redirect('/flights/${ticket.flight}/tickets/new');
        console.log(ticket);
        res.redirect(`/flights/${ticket.flight}`);
      })
  })
}