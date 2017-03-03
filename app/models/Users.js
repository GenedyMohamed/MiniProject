var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true, 
        unique:true
    },
    password:{
    	type:String,
    	required:true
    },
    name:{
        type:String
    }
})


var Users = mongoose.model("user", userSchema);

module.exports = Users;