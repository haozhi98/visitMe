const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    location: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    joined: {
        type: Date,
        default: () => Date.now()
    },
    visits: [
    	{
    	userName:{type:String , required: true },
    	startTime:{type:String , required: true },
    	endTime:{type:String , required: true },
    	details:{type:String}
    	}
   	]
})



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);