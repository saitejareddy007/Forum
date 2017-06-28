var express = require('express');
var router = express.Router();
var url = "mongodb://localhost:27017/MongoDatabase";
var mongoose = require('mongoose');
var Schema = require('Schema');
var MongoClient =require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var dbSchema =new mongoose.Schema({
    Name    :   String,
    Post    :   String,
    date    :   String,
    comments:   [
        {
            content :   String,
            date    :   String
        }
    ]
});
mongoose.connect(url);
var user = mongoose.model("employees",dbSchema);

/* GET home page. */

router.get('/',function(req,res){
    user.find({},function (err, docs) {
        if(err) res.json(err);
        else res.render('index',{users:docs});
    });
});

router.post('/new',function (req, res) {

    var date = new Date();
    new user({
        Name    :   req.body.Name,
        Post    :   req.body.post,
        date    :   date.toString().substr(0,24)
    }).save();
    res.redirect('/');

});

router.post('/:date',function (req, res) {
    var date = req.params.date;
   // console.log(name);
    var comdate = new Date();
    if(!req.body.comment==""){
        //res.send('<script>alert("Blank comment is not valid.")</script>')
        MongoClient.connect(url, function (err, db) {
            db.collection("employees").update({date: date},
                {
                    $push: {
                        comments: {
                            "content": req.body.comment,
                            "createdAt": comdate
                        }
                    }
                });
        });
    }
    res.redirect("/");
});

module.exports = router;
