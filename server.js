const express = require('express');
const db = require('./data/dbConfig');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  db.select().table('cars')
    .then(dbRes => {
      console.log(dbRes);
      res.status(200).send({ cars: dbRes });
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

module.exports = server;