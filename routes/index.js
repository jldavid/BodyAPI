// dependencies
var serial = require('../serial')
,	Models = require('../models')
,	User = Models.User
,	DataPoint = Models.DataPoint;


exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};


exports.getPulse = function(req, res) {
	DataPoint.find()
	.where('uid', '5129360e4fa8c88505000001')
	.where('type', 0)
	.sort({'$natural': -1})
	.limit(20)
	.select('timestamp type value')
	.exec(function(err, data) {
		if(err) res.send(err);
		else res.send(data);
	});
};


exports.getTemperature = function(req, res) {
	DataPoint.find()
	.where('uid', '5129360e4fa8c88505000001')
	.where('type', 1)
	.sort({'$natural': -1})
	.limit(20)
	.select('timestamp type value')
	.exec(function(err, data) {
		if(err) res.send(err);
		else res.send(data);
	});
};


exports.buzz = function(req, res) {
	serial.buzz();
	res.send('ok');
};
