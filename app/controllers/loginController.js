let Users = require('../models/Users');
let session = require('express-session');

let loginController = {
    
    getLoginFields:function(req, res){
        Users.find(function(err, users){
            if(err){
                res.send(err.message);
            }
            else{
                res.render('login', {users});
            }
        });
    },

    checkLoginFields:function(req,res){
        Users.find(function(err, users){
            if(err){
                res.send(err.message);
            }
            else{
                var j = 0;
                for (var i = 0; i<users.length; i++){
                    if (users[i].username==req.body.username && users[i].password==req.body.password){
                                    j = 1;
                                session.username = users[i].username; //savng session
                                console.log(session.username); //betala3 esm el user
                                res.redirect('/');

                    }
                }
            }
            if (j == 0)
            res.render('login',{req});
        });

        
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