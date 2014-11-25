var mongoose = require('mongoose');
var util = require('util');

var Game = mongoose.model('Game', {
  category: String,
  name: String
});

module.exports = Game;
