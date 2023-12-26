// Import necessary modules and models
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
//-----------------------------
require("dotenv").config();

// Set up the database connection URL from environment variables
const dbUrl = process.env.MONGODB_URI;

// Connect to the MongoDB database
mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected"); /*once database connected then should show "Database connected" */
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

// Refresh data in the subscribers collection
async function refreshAllData() {
    try {
        // Delete all existing documents in the subscribers collection
        await Subscriber.deleteMany({}, { wtimeout: 30000 });
        console.log("Deleted all subscribers");

        // Insert new subscriber data into the subscribers collection
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`Added ${newSubscribers.length} new subscribers`);
    } catch (err) {
        console.log("Error refreshing data", err);
    } finally {
        // Disconnect from the database after data refresh
        mongoose.disconnect();
        console.log("Disconnected from the database");
    }
}

// Call the function to refresh data in the subscribers collection
refreshAllData();