# Get YouTube Subscribers Capstone Project
This Node.js application utilizes MongoDB, a document-oriented NoSQL database, to store and manage subscriber data for a YouTube channel. The project is structured to separate concerns, with app.js handling HTTP requests and responses, and index.js connecting to the MongoDB database and starting the server.

## Technologies Used
1. Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
2. Express: Web application framework for Node.js to simplify building robust web applications.
3. MongoDB (Atlas and Compass): Cloud-based and local MongoDB instances for data storage.
4. Raw data: Utilized for testing and populating the initial database.
5. Path module: Used to join the path for index.html.
6. Postman : API development and testing tools.
7. Nodemon: Monitors for changes and automatically restarts the server.
8. Dotenv: Environment variable management for sensitive data.

## Setup
1. Install MongoDB on your local machine.
2. Clone the repository: git clone https://github.com/ymvk361/GetYoutube-Subscribers-Project.git
3. install the necessary dependency by npm install
4. Navigate to the src folder: cd src
5. Run node createDatabase.js to create the database on your local MongoDB instance.
6. run the nodemon index.js to start the http://localhost:3000/
7. Use .env file for managing environment variables.

# Endpoints

![image](https://github.com/ymvk361/GetYoutube-Subscribers-Project/assets/130222257/a7371a19-f197-4661-9ccf-1ce691eabad1)


## 1. Get All Subscribers
Endpoint: http://localhost:3000/subscribers

Method: GET

Response: An array of subscribers (an Object).

![image-1](https://github.com/ymvk361/GetYoutube-Subscribers-Project/assets/130222257/93c45766-2403-4bad-89f5-56aa3fdde1aa)

## 2. Get Subscribers' Names
Endpoint: http://localhost:3000/subscribers/names

Method: GET

Response: An array of subscribers (an Object with only two fields: name and subscribedChannel).

![image-2](https://github.com/ymvk361/GetYoutube-Subscribers-Project/assets/130222257/158ff2e3-6bba-4c11-b879-dbf498f497c0)

## 3. Get a Specific Subscriber by ID
Endpoint: http://localhost:3000/subscribers/:id

Method: GET

Response:

If the ID matches a subscriber, respond with the subscriber object.
If the ID does not match, respond with a status code 400 and an error message: {message: error.message}.

![image-3](https://github.com/ymvk361/GetYoutube-Subscribers-Project/assets/130222257/5924f45a-f5e0-4329-a49c-1d467d99fb4f)

## Project Structure
1. src/app.js: Handles HTTP requests and responses.
2. src/index.js: Connects to the MongoDB database and starts the server.
3. src/createDatabase.js: Script to create the MongoDB database.
4. src/models/subscribers.js: File not to be modified; it helps manage subscriber data.
5. src/index.html: HTML file for the frontend (Add your HTML content here).
6. src/.env: Environment variables file (Add your environment variables here).

## Running the Application
1. Ensure MongoDB is installed and running locally.
2. Run node createDatabase.js to create the necessary database.
3. In the command line, type nodemon index.js to start the server.
4. Access the specified endpoints to interact with the subscriber data.
5. Optionally, use src/index.html for frontend development.

### Access the specified endpoints to interact with the subscriber data. Feel free to explore the code.