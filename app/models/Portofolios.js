var mongoose = require('mongoose');

var portofolioSchema = mongoose.Schema({
    student_username:{
        type:String, 
 //       ref: 'Users',
        required:true, 
        unique:true,

    },
    Title:{
        type:String
    },
    profilePicture:{
    	type:String,
    },
    works:{
        type:String,
    }
})

var workSchema = mongoose.Schema()

var Portofolios = mongoose.model("portofolio", portofolioSchema);

module.exports = Portofolios;