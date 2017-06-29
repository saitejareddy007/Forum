/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../repo/db');

/* GET home page. */
router.get('/',function(req,res){
    db.find({},function (err, docs) {
        if(err) res.json(err);
        else res.render('index',{users:docs});
    });
});

router.post('/new',function (req, res) {
    var date = new Date();
    new db({
        Name    :   req.body.Name,
        Post    :   req.body.post,
        date    :   date.toString().substr(0,24)
    }).save();
    res.redirect('/');
});

router.post('/:date',function (req, res) {
    var date    =   req.params.date;
    var comdate =   new Date().toString().substr(0,24);
    var query   =   {date: date};
    var reqb    =   req.body;
    if(!reqb.comment==""){
        //res.send('<script>alert("Blank comment is not valid.")</script>')
        db.update(query,
            {
                $push: {
                    comments: {
                        "content": reqb.comment ,
                        "createdAt": comdate
                    }
                }
            },function (err) {
                if (err) throw err;
            }
        );
    }
    res.redirect("/");
});

module.exports=router;
