var express = require('express');
var router = express.Router();
var Q = require('q');
// var auth = require('../tokens.js');
var db = require('../db');

// Routes
router.post('/', function(req, res) {
  var user = req.body;

  if (!validate(user)) {
    res.json({
      success: false,
      message: 'User information validation failed.'
    });

  } else {
    var newUser = new db.users();
      newUser.firstname = user.firstname;
      newUser.lastname = user.lastname;
      newUser.email = user.email;
      newUser.username = user.username;
      newUser.password = user.password;
      getUserBy(newUser, res);
    }
});

// Helper Functions
function validate(user) {
  return user.firstname && user.lastname && user.email && user.username && user.password;
}

function getUserBy(userObj, res) {
  var username = userObj.username;
  return new Q(db.users.findOne({'username': username}).exec())
  .then(function(foundUser) {
    createAccount(userObj, foundUser, res);
  });
}

function createAccount(newUser, foundUser, res) {
  if (foundUser) {
    res.json({
      success: false,
      message: 'Username already exists!'
    });
  } else {
      newUser.save(function(err) {
        if (err) {
          console.error(err);
        } else {
            res.json({
              success: true,
              message: 'User inserted into database.',
            // token: auth.genToken(user)
            });
          } 
      });
  }
}

module.exports = router;