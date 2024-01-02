// Importing necessary modules and configurations
const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;

// Setting mongoose option to allow flexibility with query parameters
mongoose.set("strictQuery", false);

// Parsing JSON bodies and url-encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connecting to the MongoDB database
const dbUrl = process.env.MONGODB_URI;
mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Database Connected Successfully - All Ok");
        
        // Starting the Express application on the specified port
        app.listen(port, () => console.log(`Application is listening on Local Port ${port}`));
    })
    .catch((err) => {
        console.log(error);
    });