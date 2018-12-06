// import libs
const config = require('dotenv').config();
const express = require('express');
const jsonParser = require('body-parser').json();
const morgan = require('morgan');

// import routes
const api = require('./routes/api-routes');

// init server
const server = express();

// setup middlewares
server.use(jsonParser);
server.use(morgan('[server] :method :url :status - :response-time ms'));

// setup home routes
server.get('/', (req, res) => {
    res.status(200).send('Server is up and running :)');
});

// setup api routes
server.use('/api', api);

// start server
server.listen(process.env.SERVER_PORT, () => {
    console.log(`[server] Server listening at http://localhost:${process.env.SERVER_PORT}`);
});