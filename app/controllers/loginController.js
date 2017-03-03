let Users = require('../models/Users');
let session = require('express-session');

let loginController = {
    
    getLoginFields:function(req, res){
        var sess = req.session;
        sess = req.body.username;
        Users.find(function(err, users){
            if(err){
                res.send(err.message);
            }
            else{
                res.render('login', {users});
            }
        });
        console.log(sess);
    },

    checkLoginFields:function(req,res){
        res.redirect('/');
    },

    createPortofolio:function(req, res){
        let Portofolio = new Portofolio(req.body);

        Portofolio.save(function(err, portofolio){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(portofolio);
                res.redirect('/');
            }
        })
    }
}

module.exports = loginController;