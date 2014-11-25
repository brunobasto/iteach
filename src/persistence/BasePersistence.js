'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iteach_app');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {



});


module.exports.ready = function(callback) {

}
