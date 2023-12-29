const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
require("dotenv").config();

//connect to database

const dbUrl = process.env.MONGODB_URI;

mongoose
.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Database connected"); /*once database connected then should shows "Database connected" */
})
.catch((err)=>{
    console.log("Error to connect database", err);
});

//Refresh data in subscribers collection

async function refreshData() {
    try {
        await Subscriber.deleteMany({}, {wtimeout: 30000});

        console.log("Deleted all subscribers");
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`Added ${newSubscribers.length} new subscribers`);
    }catch (err) {
        console.log("Error refreshing data", err);
    }finally {
        mongoose.disconnect();
        console.log("Disconnected from database");
    }
}

refreshData();
