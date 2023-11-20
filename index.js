require('dotenv').config();
const express = require('express');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);

const socketIo = require('socket.io');

const io = socketIo(server);

// Importing the mongoose configuration to connect to the MongoDB database
require('./config/mongoose');

// Serving static files from the "public" folder
app.use(express.static('public'));


const port = 8000;

// Setting 'views' to the folder where your EJS files are located
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat', { chatMessages: [] }); // Pass any necessary data
  });

// Using the routes defined in the 'index' file
// app.use('/', require('./routes/index'));
app.use('/', routes);
server.listen(port, (error) => {
  if (error) {
    console.log("Error in creating server: ", error);
  }
  console.log(`Server is up and running on ${port}`);
});
