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
      res.status(500).send();
    });
});

server.post('/', (req, res) => {
  console.log('post fun')
  db('cars').insert(req.body)
    .then(dbRes => {
      res.status(201).send();
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
});

module.exports = server;