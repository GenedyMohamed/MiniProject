var mongoose = require('mongoose');

var portofolioSchema = mongoose.Schema({
    student_username:{
        type:String, 
        ref: 'Users',
        required:true, 
        unique:true,

    },
    profilePicture:{
    	type:Image,
    },
    works:[{
    links:{
    	type:String,
    },
    screenshots:{
    	type:String,
    }
	},
    required=true
    ]
})

var workSchema = mongoose.Schema()

var Project = mongoose.model("portofolio", portofolioSchema);

module.exports = Portofolios;