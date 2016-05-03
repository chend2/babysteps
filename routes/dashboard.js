var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/', function(req, res) {
   db.users.find( {'firstName': 'Daniel'}, function(err, users){
    if(err){
      console.log('error');
    }else{
      res.send(users);
    }
  });
});

// Add child to db post
router.post('/addChild', function(req,res) {
  //console.log("inside post request dashboard js", req );
  var childInfo = {
    firstName: req.body.firstName,
    lastName: req.gtibody.lastName,
    birthday: req.body.birthday,
    condition: req.body.condition
  };

  db.users.find({username: 'chend2'}, function(err, users){
    if(err){
      console.log('error');
    }else{
      console.log('Dans method', users[0].children);
      //var childArray = users[0].children;
      for(var i = 0; i < users[0].children.length; i++){
        var childName = users[0].children[i].firstName;
        if(childName !== req.body.firstName){
          users[0].children.addToSet(childInfo);

        }else{
          console.log('Inside add child, db.users, line 34, child already exits');
        }
      }
      users[0].save(function(){
       res.send(users);
     });
    }
  });
});

router.post('/', function(req,res){
 console.log(req.body.firstName);
 db.users.find( {username : 'chend2'}, function(err, users){
   if(err){
     console.log('error');
   }else{
     console.log(users, 'users here');
     var spliced = [];
     for(var i=0; i<users[0].children.length; i++){
       if(users[0].children[i].firstName!==req.body.firstName){
         spliced.push(users[0].children[i]);
         console.log(spliced, 'array!');
       }
     }
     users[0].children = spliced;
     users[0].save(function(){
       res.send(users);
     });
   }
 });
});

module.exports = router;