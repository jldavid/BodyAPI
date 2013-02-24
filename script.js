// dependencies
var Models = require('./models')
  , User = Models.User
  , Point = Models.DataPoint;

// some script

User
.findOne({ _id: '5129360e4fa8c88505000001' })
.exec(function(err, user) {
  if(err) throw err;


  ///////////////////
  // Seed the data //
  ///////////////////

  var now = new Date()
  ,   numPoints = 100;

  var i, point;
  for(i = 0; i < numPoints; i++) {

    point = new Point();
    point.uid = user._id;
    point.type = 0; // heartrate
    point.value = 60;
    point.timestamp = new Date;

    point.save(function(err, saved) {
      if(err) console.log('err saving data point: ' + err);
      else console.log('saved data point: ' + saved);
    });
  }
});

