// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adopterRouter = require ('./adopters/adopters-router')
const dogsRouter = require ('./dogs/dogs-router')

const server = express();

server.use('/api/adopters', adopterRouter)
server.use('/api/dogs', dogsRouter)

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
