let Users = require('../models/Users');

let homepageController = {
    
    getAllPortofolios:function(req, res){
        Users.find(function(err, users){
            if(err){
                res.send(err.message);
            }
            else{
                res.render('homepage', {users});
            }
        });
        
        var session = req.session;
        console.log(session);
    },

    createPortofolio:function(req, res){
        //let Portofolio = new Portofolio(req.body);

        // Portofolio.save(function(err, portofolio){
        //     if(err){
        //         res.send(err.message)
        //         console.log(err);
        //     }
        //     else{

        //         console.log(portofolio);
                res.redirect('/register');
        //    }
        //})
    }
}

module.exports = homepageController;