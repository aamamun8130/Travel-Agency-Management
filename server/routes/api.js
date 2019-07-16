const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

/// connnecrion

const connection = (closure) =>{

    return MongoClient.connect('mongodb://localhost/traveldata',(err, db) => {
            if(err) return err;

            closure(db);
    });
};
  // error handling..

  const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
  };

  // response handling
  let respons = {
      status : 200,
      data : [],
      message : null
  }
// get user
  router.get('/users',(req, res) => {
      connection((db) => {
          db.connection('agencys')
          .find()
          .toArray()
          .then((users) => {
              respons.data = users;
              res.json(respons);
          })
          .catch((err) =>{
              sendError(err,res);
          });
      });
  });

  module.exports = router;