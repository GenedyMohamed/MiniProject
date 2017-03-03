let Portofolios = require('../models/Portofolios');
let Works = require('../models/Works')
let homepageController = {
    
    getAllPortofolios:function(req, res){
        Portofolios.find(function(err, portofolios){
            if(err){
                res.send(err.message);
            }
            else{
                res.render('homepage', {portofolios});
            }
        });
        },

    createPortofolio:function(req, res){
        var x = new Portofolios();
        var y = new Works();
        x.student_username = "session_username";
        x.Title = req.body.InputTitle;
        x.profilePicture = req.body.InputProfileLink;
        
    }
}

module.exports = homepageController;