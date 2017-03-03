var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    screenshots:{
        type:Image,
    },
    links:{
    	type:String,
    },
    repos:{
        type:String
    },
    student_username:{
        type:String
    }
})

var Users = mongoose.model("user", userSchema);

module.exports = Users;