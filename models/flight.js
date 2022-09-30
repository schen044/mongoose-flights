const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define basic schema
const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            // save date
            let defaultDate = new Date();
            // set default date to one year later
            defaultDate.setFullYear(defaultDate.getFullYear() + 1);
        }
    }
})


// compile schema into model and export
module.exports = mongoose.model('Flight', flightSchema);