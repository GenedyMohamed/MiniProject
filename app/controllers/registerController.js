let User = require('../models/Users');

let registerController = {
    
    getRegisterFields:function(req, res){
    var x = new User();
    x.username = req.body.username;
    x.password = req.body.password;
    x.name = req.body.name;
    x.save();

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

module.exports = registerController;