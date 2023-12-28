// Create web server

// import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create server
const app = express();

// configure server
app.use(bodyParser.json());
app.use(cors());

// create route
app.get('/comments', (req, res) => {
    res.send('Hello world');
});

// start server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});