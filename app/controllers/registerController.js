let Users = require('../models/Users');

let registerController = {
    
    getRegisterFields:function(req, res){
                let logins = new Portofolio(req.body);
        var collection = db.collection('Users');
  // Insert some documents 
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
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