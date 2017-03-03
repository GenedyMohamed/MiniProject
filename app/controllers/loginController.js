let Users = require('../models/Users');

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