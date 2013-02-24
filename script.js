// dependencies
var Models = require('./models')
  , User = Models.User
  , Point = Models.DataPoint;


// seed pulse data
Point.collection.drop();
User
.findOne({ _id: '5129360e4fa8c88505000001' })
.exec(function(err, user) {
  if(err) throw err;


  /////////////////////
  // Seed pulse data //
  /////////////////////

  var now = new Date()
  ,   numPoints = 100;

  var i, point;
  var current = 70;
  for(i = 0; i < numPoints; i++) {

    current += Math.round((Math.random() - 0.5) * 3);

    point = new Point();
    point.uid = user._id;
    point.type = 0; // heartrate
    point.value = current;
    point.timestamp = new Date;

    point.save(function(err, saved) {
      if(err) console.log('err saving data point: ' + err);
      else console.log('saved data point: ' + saved);
    });
  }


  ///////////////////////////
  // Seed temperature data //
  ///////////////////////////

  var i, temp;
  var current = 32;
  for(i = 0; i < numPoints; i++) {

    current += Math.round((Math.random() - 0.5) * 1.1);

    point = new Point();
    point.uid = user._id;
    point.type = 1; // temperature
    point.value = current;
    point.timestamp = new Date;

    point.save(function(err, saved) {
      if(err) console.log('err saving data point: ' + err);
      else console.log('saved data point: ' + saved);
    });
  }
});
