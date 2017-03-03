var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    screenshots:{
        type:String
    },
    links:{
    	type:String
    },
    repos:{
        type:String
    },
    student_username:{
        type:String, 
   //     ref: 'Users',
        required:true, 
        unique:true
    }
})

var Works = mongoose.model("work", userSchema);

module.exports = Works;