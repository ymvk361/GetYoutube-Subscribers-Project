Get YouTube Subscribers Capstone Project
This Node.js application utilizes MongoDB, a document-oriented NoSQL database, to store and manage subscriber data for a YouTube channel. The project is structured to separate concerns, with app.js handling HTTP requests and responses, and index.js connecting to the MongoDB database and starting the server.

Technologies Used
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
Express: Web application framework for Node.js to simplify building robust web applications.
MongoDB (Atlas and Compass): Cloud-based and local MongoDB instances for data storage.
Raw data: Utilized for testing and populating the initial database.
Path module: Used to join the path for index.html.
Postman : API development and testing tools.
Nodemon: Monitors for changes and automatically restarts the server.
Dotenv: Environment variable management for sensitive data.

Setup
Install MongoDB on your local machine.
Clone the repository: git clone https://github.com/ymvk361/GetYoutube-Subscribers-Project.git
install the necessary dependency by npm install
Navigate to the src folder: cd src
Run node createDatabase.js to create the database on your local MongoDB instance.
run the nodemon index.js to start the http://localhost:3000/
Use .env file for managing environment variables.

Endpoints

![Alt text](image.png)

1. Get All Subscribers
Endpoint: http://localhost:3000/subscribers

Method: GET

Response: An array of subscribers (an Object).

![Alt text](image-1.png)

2. Get Subscribers' Names
Endpoint: http://localhost:3000/subscribers/names

Method: GET

Response: An array of subscribers (an Object with only two fields: name and subscribedChannel).

![Alt text](image-2.png)

3. Get a Specific Subscriber by ID
Endpoint: http://localhost:3000/subscribers/:id

Method: GET

Response:

If the ID matches a subscriber, respond with the subscriber object.
If the ID does not match, respond with a status code 400 and an error message: {message: error.message}.

![Alt text](image-3.png)

Project Structure
src/app.js: Handles HTTP requests and responses.
src/index.js: Connects to the MongoDB database and starts the server.
src/createDatabase.js: Script to create the MongoDB database.
src/models/subscribers.js: File not to be modified; it helps manage subscriber data.
src/index.html: HTML file for the frontend (Add your HTML content here).
src/.env: Environment variables file (Add your environment variables here).

Running the Application
Ensure MongoDB is installed and running locally.
Run node createDatabase.js to create the necessary database.
In the command line, type nodemon index.js to start the server.
Access the specified endpoints to interact with the subscriber data.
Optionally, use src/index.html for frontend development.

Access the specified endpoints to interact with the subscriber data.
Feel free to explore the code.