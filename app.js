// Importing required modules and models for the Express application
const express = require("express");
const Subscriber = require("./src/models/subscribers");
const path = require("path");

// Creating an Express application instance
const app = express();

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// Route to get all subscribers from the database
app.get("/subscribers", async (req, res, next) => {
    try {
        let subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

// Route to get all subscribers' names and subscribed channels
app.get("/subscribers/names", async (req, res, next) => {
    try {
        let subscribers = await Subscriber.find(
            {},
            { name: 1, subscribedChannel: 1, _id: 0 }
        );
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

// Route to get a subscriber by ID and handle 400 error
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let subscriber = await Subscriber.findById(id);
        res.status(200).json(subscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Exporting the configured Express application
module.exports = app;