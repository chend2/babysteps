var mongoose = require('mongoose');
var dbconfig = require('./config.js');

var dbmodels = {};

var options = {
  server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000}}
};

var mongodbUri = 'mongodb://'+ dbconfig.username + ':'+ dbconfig.password +
'@ds021701.mlab.com:21701/babystepsdb';

mongoose.connect(mongodbUri, options);

mongoose.connection.on('error', console.error.bind(console,'connection error: '));

mongoose.connection.once('open', function() {
  console.log('MongoDB is Connected!');
});

var usersSchema = new mongoose.Schema ({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  children: [],
  city: String,
  state: String,
  zip: String
});


var conditionsSchema = new mongoose.Schema ({
  name: String,
  grossMotor: {
    sitsalone: [],
    crawls: [],
    stands: [],
    walksalone: []
  },
  language: {
    firstwords: [],
    twowordphrases: []
  },
  personalSocial: {
    responsivesmile: [],
    fingerfeeds: [],
    drinksunassisted: [],
    usesspoon: []
  }
});

dbmodels.users = mongoose.model('users', usersSchema);
dbmodels.conditions = mongoose.model('conditions',conditionsSchema);

module.exports = dbmodels;

