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

server.get('/:id', (req, res) => {
  db('cars').where('vin', req.params.id).select()
    .then(dbRes => {
      console.log(dbRes);
      res.status(200).send({car: dbRes[0]});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
})

module.exports = server;