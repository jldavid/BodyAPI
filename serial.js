var serialport = require('serialport')
,	SerialPort = serialport.SerialPort
,	Models = require('./models')
,	User = Models.User
,	Point = Models.DataPoint;

var serial = {};
var myPort;


serial.init = function() {

	// initialize serial port read
	myPort = new SerialPort("/dev/tty.usbmodemfa131", { 
	//myPort = new SerialPort("/dev/cu.usbserial-A900XVAA", {
		// look for return and newline at the end of each data packet:
		baudrate: 115200,
		//baudrate: 9600,
		parser: serialport.parsers.readline("\r\n")
	});

	myPort.on('data', function(data) {
		console.log(data);

		// // parse the data
		// index = data.indexOf('B');
		// if(index === 0) {
		// 	davlue = data.substring(1);

		// 	// save data to db
		// 	point.uid = user._id;
		// 	point.type = 0;
		// 	point.value = davalue;
		// 	point.timestamp = new Date;
		// 	point.save(function(err, saved) {
		//       if(err) console.log('err saving data point: ' + err);
		//       else console.log('saved data point: ' + saved);
		// 	});
		// }
	});
};


// public methods
serial.buzz = function() {
	console.log('sending buzz');
	myPort.write(1);
};


// find dummy user
// User
// .findOne({ _id: '5129360e4fa8c88505000001' })
// .exec(function(err, user) {
// });



module.exports = serial;