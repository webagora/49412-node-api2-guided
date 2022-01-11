const express = require('express')
const adoptersRouter = require('./adopters/adopters-router')

const server = express()

server.use(express.json())
server.use('/api/adopters', adoptersRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `)
})

module.exports = server
