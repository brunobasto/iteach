'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iteach_app');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var Game = require('../persistence/Game.js');

var name = 'test';

exports.get = function(req, res) {
  var contents = this.render('views.home', {
    content: 'Home'
  });

  console.log('dsfvsdfsdf');
  res.json(['dfssdf']);

  // Game.find({
  //     name: name
  //   },
  //   function(err, games) {
  //     if (err) {
  //       util.log(err);
  //     }

  //     res.json(['rrr']);
  //   }
  // );
};
