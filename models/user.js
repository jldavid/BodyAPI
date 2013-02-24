
////////////////
// User Model //
////////////////

var mongoose = require('mongoose')
 ,	Schema = mongoose.Schema;


////////////
// Schema //
////////////

var UserSchema = new Schema({

	email: { type: String, required: false, index: true },
	name: { type: String, required: true, index: true },

}, { strict: true });

var DataPointSchema = new Schema({
	uid: {type: Schema.ObjectId, required: true, ref:'User', index: true},
	type: {type: Number, required: true, index: true},
	value: {type: Number, require: true},
	timestamp: {type: Date, required: true, index: true},
});

// methods


// register user model
var User = mongoose.model('User', UserSchema);
var DataPoint = mongoose.model('DataPoint', DataPointSchema);
