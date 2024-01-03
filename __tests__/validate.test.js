// Load environment variables from the specified path
require('dotenv').config({ path: ".env" });

// Import necessary libraries and modules
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

// Load environment variables (repeated, consider removing one)
require("dotenv").config();

// Connect to the MongoDB database before each test
beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
});

// Close the database connection after each test
afterEach(async ()=>{
    await mongoose.connection.close();
});

// Test suite for the "GET /" endpoint
describe("GET /", ()=>{
    // Test case: Should return index.html
    it("should return index.html", async()=>{
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
    });
});

// Test suite for the "GET /subscribers" endpoint
describe("GET /subscribers",()=>{
    // Test case: Should return an array of subscribers
    it("should return an array of subscribers", async()=>{
        const res = await request(app).get("/subscribers")
        expect(res.statusCode).toBe(200);
    });
});

// Test suite for the "GET /subscribers/names" endpoint
describe("GET /subscribers/names", ()=>{
    // Test case: Should return an array of subscribers' names and subscribed channels
    it("should return an array of subscribers name and subscribed Channel", async()=>{
        const res = await request(app).get("/subscribers/names");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

// Test suite for the "GET /subscribers/:id" endpoint
describe("GET /subscribers/:id", ()=>{
    // Test case: Should return an array of subscribers' name and subscribed channel with the specified id
    it("should return an array of subscribers name and subscribed Channel with id", async()=>{
        const res = await request(app).get("/subscribers/658bff9aec85d941ae4622d9");
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBe("658bff9aec85d941ae4622d9");
    });
});