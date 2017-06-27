var express = require('express');
var router = express.Router();
var url = "mongodb://localhost:27017/MongoDatabase";
var mongoose = require('mongoose');
var Schema = require('Schema');

var dbSchema =new mongoose.Schema({
    Name : String,
    Post : String,
    date : String
});
var db = mongoose.createConnection(url);
var user = mongoose.model("employees",dbSchema);

/* GET home page. */
router.get('/',function (err,res) {
    res.render('index');
});

router.get('/views',function(req,res){
    user.find({},function (err, docs) {
        if(err) res.json(err);
        else res.render('indexv',{users:docs});
    });
});

router.post('/new',function (req, res) {

    var date = new Date();
    new user({
        Name : req.body.Name,
        Post : req.body.post,
        date : date
    }).save();
    res.redirect('/');

});
module.exports = router;
