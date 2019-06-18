/**
 * Created by Sai on 6/29/17.
 */
<<<<<<< HEAD

var express = require('express');
var session = require('express-session');
var db = require('../repo/db');
var fs =require('fs');
var path= require('path');
var router = express.Router();
var homeApi = require('../lib/home').getHomeAPIInstance();
<<<<<<< HEAD
<<<<<<< HEAD
var isset = require('isset');
var sess;
=======
=======

>>>>>>> updated
//require('es6-shim');
>>>>>>> Update index.js

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
=======
let express = require('express');
let router = express.Router();
let db = require('../repo/db');
let homeApi = require('../lib/homeAPI').getInstance();
let {callAPI} = require('../lib/common-utils/router_functions');
let fn = require('../lib/common-utils/functions');
let {renderViewFromAPI} = require('../lib/common-utils/router_functions');

// require('es6-shim');

/* GET home page. */
router.get('/', (req, res) => {
    renderViewFromAPI(req, res, fn.bind(homeApi,"getAllElements"), 'index');
});

router.post("/getPosts/", (req, res) => {
    callAPI(req, res, fn.bind(homeApi,"getAllElements"));
});
>>>>>>> 5ec137135399641820aac55d2aef582736476e24

router.post('/new',function (req, res) {
    callAPI(req, res, fn.bind(homeApi,"createPost"));
});

router.post('/add-comment/:id',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

<<<<<<< HEAD
    homeApi.addComment(params,function (err) {
        res.redirect('/'+params.id)
=======
    Home.addComment(params,function (err) {
        res.redirect("/"+req.params.id);
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
    });

});
router.post('/deletePost/:id',function (req, res) {
<<<<<<< HEAD
    const params = req.params || {};
    homeApi.deletePost(params,function (err, result) {
        if(err) throw err;
        res.end("The post is deleted successfully");
    });
})
router.get('/:id',function (req, res) {
    const params = req.params || {};
//    params.postParams = req.body;

    homeApi.viewComments(params,function (err, docs) {
        res.render('comments', {posts: docs});
    });

=======
    callAPI(req, res, fn.bind(homeApi,"deletePost"));
});

router.get('/view-comments/:id',function (req, res) {
    renderViewFromAPI(req, res, fn.bind(homeApi,"viewComments"),"comments");
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
});

module.exports=router;
