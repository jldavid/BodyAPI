// dependencies
var serial = require('../serial');


exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};


exports.getPulse = function(req, res) {
};


exports.getTemperature = function(req, res) {
};


exports.buzz = function(req, res) {

	serial.buzz();

};