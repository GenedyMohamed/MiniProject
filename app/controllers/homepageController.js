let Portofolios = require('../models/Portofolios');
let Works = require('../models/Works')
let session = require('express-session');

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
        console.log(session.username); // mesh betala3 esm el user, betala3 undefined
        if (session.username){
        var x = new Portofolios();
        var y = new Works();
        x.student_username = req.body.name;
        x.Title = req.body.title;
        x.profilePicture = req.body.pp;
        x.works = req.body.w;
        y.student_username = req.body.name;
        y.screenshots = req.body.ss;
        y.links = req.body.w;
        y.repos = req.body.r;
        x.save();
        y.save();
        res.redirect('/');
        }else{
            res.send("YOU ARE NOT AUTHORIZED. sorry")
        }
    }
}

module.exports = homepageController;