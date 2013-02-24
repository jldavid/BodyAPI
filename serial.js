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
		var prefix, datype, davalue;
		
		// parse the data
		prefix = data.substring(0, 1);
		davalue = data.substring(1);

		if(prefix === 'B') {
			datype = 0;
			console.log('pulse: ' + davalue);
		} else if(prefix === 'T') {
			datype = 1;
			davalue = Number(davalue) + 10
			console.log('temperature: ' + davalue);
		}

		// save data to db
		var point = new Point;
		point.uid = '5129360e4fa8c88505000001';
		point.type = datype;
		point.value = davalue;
		point.timestamp = new Date;
		point.save(function(err, saved) {
	      if(err) console.log('err saving data point: ' + err);
	      //else console.log('saved data point: ' + saved);
		});
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