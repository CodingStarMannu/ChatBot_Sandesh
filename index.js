const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Importing the mongoose configuration to connect to the MongoDB database
require('./config/mongoose');


const port = 8000;



// Using the routes defined in the 'index' file
app.use('/', require('./routes/index'));

server.listen(port, (error) => {
  if (error) {
    console.log("Error in creating server: ", error);
  }
  console.log(`Server is up and running on ${port}`);
});
