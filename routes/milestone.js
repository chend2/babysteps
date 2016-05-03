var express = require('express');
var router = express.Router();
var db = require('../db.js');

router.post('/', function(req, res) {
  console.log(req.body);
  db.conditions.find({
    'name': req.body.conditionName
  }, function(err, condition) {
    if (err) {
      console.log('error');
    } else {
      res.send(condition);
    }
  });
});

module.exports = router;