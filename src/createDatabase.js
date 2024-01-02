// Importing necessary modules and models
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
require("dotenv").config();

// Connecting to the MongoDB database
const dbUrl = process.env.MONGODB_URI;
mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected"); /*once database connected then should shows "Database connected" */
    })
    .catch((err) => {
        console.log("Error to connect database", err);
    });

// Refreshing data in the subscribers collection
async function refreshData() {
    try {
        // Deleting all existing subscribers in the collection
        await Subscriber.deleteMany({}, { wtimeout: 30000 });
        console.log("Deleted all subscribers");

        // Inserting new subscriber data into the collection
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`Added ${newSubscribers.length} new subscribers`);
    } catch (err) {
        console.log("Error refreshing data", err);
    } finally {
        // Disconnecting from the database after refreshing data
        mongoose.disconnect();
        console.log("Disconnected from database");
    }
}

// Invoking the refreshData function to update the subscribers collection
refreshData();