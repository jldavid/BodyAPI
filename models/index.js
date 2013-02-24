
////////////
// Models //
////////////

var mongoose = require('mongoose');

// initialize database connection
mongoose.connect("localhost:27017");
mongoose.connection.on('open', function(err, db) {
	if(err) console.log(err);
});

// initialize models
require('./user');

// exports
exports.User = mongoose.model('User');
exports.DataPoint = mongoose.model('DataPoint');
