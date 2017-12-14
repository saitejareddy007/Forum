/**
 * Created by Sai on 6/29/17.
 */

var express = require('express');
var session = require('express-session');
var db = require('../repo/db');
var fs =require('fs');
var path= require('path');
var router = express.Router();
var homeApi = require('../lib/home').getHomeAPIInstance();
var isset = require('isset');
var sess;

/* GET home page. */
router.get('/',function (req, res, next) {
    sess = req.session;
    console.log(sess._id);
    if (!isset(sess._id)) {
        res.render('login');
    } else {
        next();
    }
},function(req,res){
    db.dbOfPosts.find({},function (err, docs) {
        res.render('index', {posts: docs});
    })
});

router.post('/logout',function (req, res) {
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

router.post('/',function(req,res){
    const params = req.params || {};
    params.postParams = req.body;
    sess=req.session;
    db.dbOfAccounts.findOne({Email:req.body.loginId},function (err, result) {
        sess._id=result._id;
        sess.Name=result.Name;
        console.log("sucessfully passed");
    });

    homeApi.getAllElements(params,function(err, docs) {
        res.render('index', {posts: docs});
    },function (err) {
        res.render('login');
    });
});

router.post('/newAccount',function (req, res) {
    const params = req.params || {};
    params.postParams = req.body;

    homeApi.createForumAccount(params,function(err){
        if (err) throw err;
        res.send('Your account has been created successfully<a href="/">click here to login</a>')
    });
});

router.post('/new',function (req, res) {
    // read and construct params var

    var newItem=new db.item();
    //console.log()

    newItem.img.data=(req.body.file,"base64");
    newItem.img.contentType = 'image/png';
    newItem.save();

    const params = req.params;
    params.postParams = req.body;
    params._id=sess._id;
    console.log(sess._id);

    params.Name=sess.Name;
    homeApi.createPost(params,function (err) {
        if (err) throw err;
        res.send({msg:'Your post has been created successfully.'});
    });

});

router.post('/addcomment/:id',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

    homeApi.addComment(params,function (err) {
        res.redirect('/'+params.id)
    });

});

router.get('/:id',function (req, res) {
    const params = req.params || {};
//    params.postParams = req.body;

    homeApi.viewComments(params,function (err, docs) {
        res.render('comments', {posts: docs});
    });

});

module.exports=router;
