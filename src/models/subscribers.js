// Importing Mongoose library
const mongoose = require('mongoose');


// Defining a Mongoose schema for a subscriber
// Define subscriber properties: Name (string, required), 
// Subscribed channel (string, required), 
// Subscribed date (date, required, default: current date)
const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// Exporting the Mongoose model named 'Subscriber' with the defined schema
module.exports = mongoose.model('Subscriber',susbcriberSchema);