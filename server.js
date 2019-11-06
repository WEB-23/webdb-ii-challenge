const express = require('express');

const db = require('./data/db-config.js');

const carsRouter = require('./carsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
