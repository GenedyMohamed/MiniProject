// require dependincies 
var express = require('express');
var router = express.Router();
var homepageController = require('./controllers/homepageController');
var loginController = require('./controllers/loginController');
var registerController = require('./controllers/registerController');


// add routes
router.get('/', homepageController.getAllPortofolios);
router.get('/login', loginController.getLoginFields);
router.get('/register', function(req,res){
    res.render('register')
});

router.post('/homepage', homepageController.createPortofolio);
router.post('/register', registerController.getRegisterFields);
router.post('/login', loginController.checkLoginFields);

// export router

module.exports = router;